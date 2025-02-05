function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);

  // Decode the JWT token to get user info (optional)
  const userObject = parseJwt(response.credential);
  console.log("User Info:", userObject);

  // You can send `response.credential` to your server for verification
}

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  );
  return JSON.parse(jsonPayload);
}
