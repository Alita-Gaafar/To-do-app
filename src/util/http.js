import { redirect } from "react-router-dom";

import { getToken } from "./react-router";

export async function tryAndCatch(httpFn) {
  try {
    const res = await httpFn();

    return res;
  } catch (error) {
    throw new Response(JSON.stringify({ message: "Server error" }), {
      status: 505,
    });
  }
}

export async function fetchAllData(url) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Response(JSON.stringify({ message: "Failed to fetch" }), {
      status: 505,
    });
  }

  return res;
}

export async function fetchSpecificData(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Response(JSON.stringify({ message: "Failed to fetch" }), {
      status: 505,
    });
  }
  return res;
}

export async function addData(url, newData, path) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    },
    body: JSON.stringify(newData),
  });

  if (!res.ok) {
    throw new Response(JSON.stringify({ message: "Failed to delete" }), {
      status: 401,
    });
  }

  return redirect(path);
}

export async function editData(url, newData, path) {
  const res = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    },
    body: JSON.stringify(newData),
  });

  if (!res.ok) {
    throw new Response(JSON.stringify({ message: "Failed to delete" }), {
      status: 401,
    });
  }

  return redirect(path);
}

export async function deleteData(url) {
  console.log("Deleting");

  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  });

  if (!res.ok) {
    throw new Response(
      { message: "Could not delete" },
      {
        status: 500,
      },
    );
  }

  return null;
}
