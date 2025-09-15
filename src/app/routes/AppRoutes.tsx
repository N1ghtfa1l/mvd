import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import { Layout } from "../layout"
import { HomePage } from "../../pages/HomePage"
import { ActivityPage } from "../../pages/ActivityPage"
import { ContactPage } from "../../pages/ContactPage"
import { CitizenPage } from "../../pages/CitizenPage"
import { WantedPage } from "../../pages/WantedPage/ui/WantedPage"
import { useSelector } from "react-redux"
import type { RootState } from "../store/mainStore"
import { AuthPage } from "../../pages/AuthPage"

export const AppRoutes = () => {
    const auth = useSelector((state: RootState) => state.authReducer.authorized)
    return (
        <>
            <BrowserRouter basename="/mvd">
                <Routes>
                    {auth ?
                        <>
                            <Route path="/" element={<Layout />}>
                                <Route index element={<HomePage />} />
                                <Route path="*" element={<Navigate to="/" replace />} />
                            </Route>
                            <Route path="/activity" element={<Layout />}>
                                <Route index element={<ActivityPage />} />
                            </Route>
                            <Route path="/citizen" element={<Layout />}>
                                <Route index element={<CitizenPage />} />
                            </Route>
                            <Route path="/contact" element={<Layout />}>
                                <Route index element={<ContactPage />} />
                            </Route>
                            <Route path="/wanted" element={<Layout />}>
                                <Route index element={<WantedPage />} />
                            </Route>
                        </>
                        :
                        <>
                            <Route path="/auth" element={<AuthPage />} />
                            <Route path="*" element={<Navigate to="/auth" replace />} />
                        </>
                    }
                </Routes>
            </BrowserRouter>
        </>
    )
}