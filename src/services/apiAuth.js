import supabase, { supabaseUrl } from "./supabase";

export async function signUp({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw Error(error.message);

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = supabase.auth.signOut();

  if (error) throw Error(error.message);
}

export async function updataCurrentUser({ fullName, password, avatar }) {
  // 1) Upload password OR fullName

  let updataData;

  if (password) updataData = { password };

  if (fullName) updataData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updataData);

  if (error) throw Error(error.message);

  if (!avatar) return data;

  // 2) Upload the avatar image

  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw Error(storageError.message);

  // 3) Upload avatar in the user

  const { data: updateUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw Error(error2.message);

  return updateUser;
}
