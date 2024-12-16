// Handle login
const handleLogin = async () => {
    const email = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (!email || !isValidEmail(email)) return showError("Please enter a valid email address.");
    if (!password) return showError("Please enter your password.");

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save UID to localStorage
        localStorage.setItem("uid", user.uid);

        // Redirect to the admin page
        window.location.href = "admin.html";
    } catch (error) {
        console.error("Login error:", error);
        showError(error.message);
    }
};
