import { useState, useEffect } from "react";
import { Head, useForm, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Breadcrumb from "@/Components/Breadcrumb";
import CRUDForm from "@/Components/CRUDForm";
import WebsiteInformation from "./Partials/WebsiteInformation";
import SEOInformation from "./Partials/SEOInformation";
import { getDefaultImage, getImageUrl } from "@/Helper/Helper";
import { toast, ToastContainer } from "react-toastify";

function Index({ auth, errors, setting }) {
    const [PageTitle, setPageTitle] = useState("Site Setting Information");
    const HandleHeadTitle = (value) => {
        setPageTitle(value.name);
    };
    const { props } = usePage();
    const { flash } = props;
    useEffect(() => {
        if (flash) {
            if (flash.success) {
                toast.success(flash.success);
            }
            if (flash.error) {
                toast.error(flash.error);
            }
            if (flash.faviconPath) {
                updateFavicon(flash.faviconPath);
            }
        }
    }, [flash]);

    return (
        <>
            <AuthenticatedLayout auth={auth}>
                <Head title={PageTitle} />
                <div className="container-fluid">
                    <Breadcrumb />
                    <CRUDForm
                        HandleHeadTitle={HandleHeadTitle}
                        panelName={[
                            "Website Information",
                            "Meta/OG Information",
                        ]}
                        icon={["ti ti-home", "ti ti-seo"]}
                    >
                        <WebsiteInformation
                            index={0}
                            errors={errors}
                            setting={setting}
                        />
                        <SEOInformation
                            index={1}
                            errors={errors}
                            setting={setting}
                        />
                    </CRUDForm>
                </div>
                <ToastContainer />
            </AuthenticatedLayout>
        </>
    );
}
function updateFavicon(faviconUrl) {
    const link = document.querySelector("link[rel~='icon']");
    console.log(link);
    if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = faviconUrl;
    console.log(link);
}

export default Index;
