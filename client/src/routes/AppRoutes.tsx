import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import AppLayout from "../layout/AppLayout"
import FloatingLabelInput from "../components/input/FloatingLabelInput"

const SampleComponent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <h1 className="text-red-500 bg-amber-300 mb-8 text-2xl font-bold">Floating Label Input Demo</h1>
            <div className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
                <FloatingLabelInput
                    label="First Name"
                    type="text"
                    name="first_name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <FloatingLabelInput
                    label="Last Name"
                    type="text"
                    name="last_name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <FloatingLabelInput
                    label="Birth Date"
                    type="date"
                    name="birth_date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                />

                <FloatingLabelInput
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    showPasswordToggle={true}
                    error={password.length > 0 && password.length < 6 ? "Password must be at least 6 characters" : ""}
                />
            </div>
        </>
    )
}

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<SampleComponent />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes
