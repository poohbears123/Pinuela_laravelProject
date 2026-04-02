import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import AppLayout from "../layout/AppLayout"
import FloatingLabelInput from "../components/input/FloatingLabelInput"

const SampleComponent = () => {
    const [firstName, setFirstName] = useState("john");
    const [lastName, setLastName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <h1 className="text-red-500 mb-4">Floating Label Input Demo</h1>
            <div className="mb-4 space-y-4">
                <FloatingLabelInput
                    label="First Name"
                    type="text"
                    name="first_name"
                    required
                    autoFocus
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <p className="font-medium">First Name:{firstName}</p>

                <FloatingLabelInput
                    label="Last Name"
                    type="text"
                    name="last_name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <p className="font-medium">Last Name:{lastName}</p>

                <FloatingLabelInput
                    label="Birth Date"
                    type="date"
                    name="birth_date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                />
                <p className="font-medium">BirthDate:{birthDate}</p>

                <FloatingLabelInput
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    showPasswordToggle={true}
                    error={password.length > 0 && password.length < 6 ? "Password must be at least 6 characters" : ""}
                />
                <p className="font-medium">Password:{password}</p>
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
