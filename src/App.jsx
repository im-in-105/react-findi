import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Split from "./components/Split";
import Etcetera from "./components/Etcetera";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import RoommateForm from "./components/RoommateForm";
import RoommateResult from "./components/RoommateResult";

function App() {
    const location = useLocation();
    const showFooter = location.pathname.startsWith("/roommate");

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkSession = async () => {
            try {
                const res = await fetch("/roommate/session-info", {
                    method: "GET",
                    credentials: "include",
                });

                setIsAuthenticated(res.ok);
            } catch (err) {
                console.error("세션 확인 실패", err);
                setIsAuthenticated(false);
            }
        };

        checkSession();
    }, []);

    return (
        <>
            <Nav isAuthenticated={isAuthenticated} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Home />
                            <Details />
                            <Split />
                            <Etcetera />
                        </>
                    }
                />
                <Route path="/roommate" element={<RoommateForm />} />
                <Route path="/roommate/match" element={<RoommateResult />} />
            </Routes>
            {showFooter && <Footer />}
        </>
    );
}

// ✅ 이거 반드시 필요!
export default App;
