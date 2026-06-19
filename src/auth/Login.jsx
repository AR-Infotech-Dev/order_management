import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import LoginForm from "../auth/LoginForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import VerificationPage from "../auth/VerificationPage";

import { makeRequest } from "../api/httpClient";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [step, setStep] = useState(
    location.pathname === "/forgot-password" ? "forgot" : "login"
  );

  const [formData, setFormData] = useState({
    email: "",
    code: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      email: "",
      code: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSendOtp = (email) => {
    setFormData({
      ...formData,
      email,
    });

    setStep("verify");
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    if (!formData.code || !formData.password || !formData.confirmPassword) {
      alert("All fields are required");
      return;
    }

    const lengthCheck = formData.password.length >= 8;
    const upperCaseCheck = /[A-Z]/.test(formData.password);

    if (!lengthCheck || !upperCaseCheck) {
      alert("Password must be at least 8 characters and include one uppercase letter");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await makeRequest("verifyOtp", {
        method: "POST",
        body: {
          otp: formData.code,
          new_password: formData.password,
          re_enter_password: formData.confirmPassword,
        },
      });

      if (!res.success) {
        alert(res.message);
        return;
      }

      alert("Password reset successful");
      resetForm();
      setStep("login");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 p-4 text-slate-900 sm:p-6 lg:p-8">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-6xl overflow-hidden rounded-lg bg-white shadow-2xl shadow-slate-300/70 sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)]">
        <section className="flex w-full items-center justify-center px-5 py-10 sm:px-8 lg:w-[42%] lg:px-10">
          <div className="w-full max-w-sm">
            <div className="mb-10 flex items-center gap-3">
              <div className=" place-items-center h-12  w-25 p-2 rounded-lg bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/50">
                Plantpro
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                  Science
                </p>
                <p className="text-sm text-slate-500">Workspace access</p>
              </div>
            </div>

            {step === "login" && (
              <>
                <h1 className="text-3xl font-semibold tracking-tight text-slate-950">
                  Sign in
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                  Enter your account details to manage orders and users.
                </p>

                <div className="mt-8">
                  <LoginForm
                    onForgot={() => {
                      setStep("forgot");
                      navigate("/forgot-password");
                    }}
                  />
                </div>
              </>
            )}

            {step === "forgot" && (
              <>
                <h1 className="text-3xl font-semibold tracking-tight text-slate-950">
                  Forgot password
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                  We will send an OTP to your registered email address.
                </p>

                <div className="mt-8">
                  <ForgotPasswordForm
                    onOtpSent={handleSendOtp}
                    onBack={() => {
                      resetForm();
                      setStep("login");
                      navigate("/login");
                    }}
                  />
                </div>
              </>
            )}

            {step === "verify" && (
              <VerificationPage
                formData={formData}
                onChange={handleChange}
                onSubmit={handleVerify}
                onBack={() => {
                  resetForm();
                  setStep("login");
                  navigate("/login");
                }}
              />
            )}
          </div>
        </section>

        <section className="relative hidden flex-1 overflow-hidden bg-slate-950 lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.45),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(20,184,166,0.30),transparent_28%),linear-gradient(135deg,#0f172a,#111827_45%,#1e3a8a)]" />
          <div className="relative flex h-full flex-col justify-between p-12 text-white">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
                Fast order control
              </p>
              <h2 className="mt-4 max-w-lg text-4xl font-semibold leading-tight">
                Track orders, roles, and access from one focused workspace.
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {["Orders", "Tickets", "Access"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur"
                >
                  <p className="text-sm font-medium text-white">{item}</p>
                  <p className="mt-1 text-xs text-blue-100">Live workspace</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
