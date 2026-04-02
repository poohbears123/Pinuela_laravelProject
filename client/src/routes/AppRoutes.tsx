import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import FloatingLabelInput from "../components/input/FloatingLabelInput";
import FloatingLabelSelect from "../components/Select/FloatingLabelSelect";


const SampleComponent = () => {
    const [firstName, setFirstName] = useState("john");
    const [lastName, setLastName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState(""); // ✅ fixed

    const genders = [
        { value: "", text: "Select Gender" },
        { value: "1", text: "Male" },
        { value: "2", text: "Female" },
        { value: "3", text: "Prefer Not to Say" }
    ];

    return (
        <>
            <h1 className="text-red-500"></h1>

            <div className="mb-4 space-y-4">
                {/* First Name */}
                <FloatingLabelInput
                    label="First Name"
                    type="text"
                    name="first_name"
                    required
                    autoFocus
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <p className="font-medium">First Name: {firstName}</p>

                {/* Last Name */}
                <FloatingLabelInput
                    label="Last Name"
                    type="text"
                    name="last_name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <p className="font-medium">Last Name: {lastName}</p>

                {/* Birth Date */}
                <FloatingLabelInput
                    label=""
                    type="date"
                    name="birth_date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                />
                <p className="font-medium">Birth Date: {birthDate}</p>

                {/* Password */}
                <FloatingLabelInput
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    showPasswordToggle={true}
                    error={
                        password.length > 0 && password.length < 6
                            ? "Password must be at least 6 characters"
                            : ""
                    }
                />
                <p className="font-medium">Password: {password}</p>

                {/* Gender Select */}
                <FloatingLabelSelect
                    label=""
                    name="gender"
                    value={gender} // ✅ added
                    onChange={(e) => setGender(e.target.value)} // ✅ added
                >
                    {genders.map((genderOption, index) => (
                        <option key={index} value={genderOption.value}>
                            {genderOption.text}
                        </option>
                    ))}
                </FloatingLabelSelect>

                <p className="font-medium">Gender: {gender}</p>
            </div>
            <div className="overflow-hidden rounded-lg
            border border-gray-200 bg-white">
                <div className="max-w-full max-h-[calc(100vh)] overflow-x-auto">


                </div>
            </div>
        </>
    );
};



const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<SampleComponent />} />
            </Route>
        </Routes>
    );
};


export default AppRoutes;