import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Split from "./components/Split";
import Etcetera from "./components/Etcetera";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import RoommateForm from "./components/RoommateForm";
import RoommateResult from "./components/RoommateResult";
function App() {
    // location 훅을 이용하려면 App을 BrowserRouter 내부로 감싸는 별도 컴포넌트로 분리하거나,
    // BrowserRouter를 최상단에 둔 후 내부에서 location을 사용해야 합니다.
    // 그래서 AppContent 컴포넌트로 분리해보겠습니다.

    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

function AppContent() {
    const location = useLocation();
    const showFooter = location.pathname.startsWith("/roommate");

    return (
        <>
            <Nav />
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

export default App;
