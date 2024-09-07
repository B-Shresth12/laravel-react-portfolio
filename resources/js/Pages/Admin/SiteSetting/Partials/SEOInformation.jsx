import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { getDefaultImage, getImageUrl, getObjectUrl } from "@/Helper/Helper";
import InputGroup from "@/Components/InputGroup";
import TextareaGroup from "@/Components/TextareaGroup";
import InputFile from "@/Components/InputFile";

function SEOInformation({ index, errors, setting }) {
    const { data, setData, post, processing } = useForm({
        og_meta_title: setting
            ? setting.og_meta_title
                ? setting.og_meta_title
                : ""
            : "",
        og_meta_description: setting
            ? setting.og_meta_description
                ? setting.og_meta_description
                : ""
            : "",
        og_image: null,
    });

    const [ogImage, setOgImage] = useState(
        setting
            ? getImageUrl("storage/setting/" + setting.og_image)
            : getDefaultImage(150, 150)
    );
    const setFile = (name, file) => {
        setData(name, file);
        setOgImage(getObjectUrl(file));
    };

    const submitSEOForm = (e) => {
        e.preventDefault();
        post(route("admin.setting.updateSEO"));
    };

    return (
        <div className="tab-pane p-3" id={`tab${index}`} role="tabpanel">
            <div className="p-3">
                <form onSubmit={submitSEOForm}>
                    <div className="row">
                        <div className="row form-group">
                            <div className="col-md-12">
                                <InputGroup
                                    label="OG Meta Title"
                                    icon="ti ti-seo"
                                    name="og_meta_title"
                                    error={errors.og_meta_title}
                                    value={data.og_meta_title}
                                    placeholder="Enter OG Meta Title"
                                    onChange={(e) =>
                                        setData("og_meta_title", e.target.value)
                                    }
                                />
                            </div>
                            <div className="col-md-12">
                                <TextareaGroup
                                    label="OG Meta Description"
                                    icon="ti ti-seo"
                                    name="og_meta_description"
                                    error={errors.og_meta_description}
                                    required={true}
                                    rows="5"
                                    value={data.og_meta_description}
                                    placeholder="Enter OG Meta Description"
                                    onChange={(e) =>
                                        setData(
                                            "og_meta_description",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                            <div className="col-md-12">
                                <InputFile
                                    src={ogImage}
                                    alt="meta_image"
                                    recommendedSize="1200 x 630"
                                    label="OG Image"
                                    icon="fa fa-image"
                                    name="og_image"
                                    error={errors.og_image}
                                    accept=".jpg, .jpeg, .png"
                                    onChange={(e) => {
                                        setFile("og_image", e.target.files[0]);
                                    }}
                                />
                            </div>
                            <div className="card-footer py-4">
                                <a href="/admin" className="btn btn-danger">
                                    <i className="fa fa-times"></i>
                                    &nbsp;Cancel
                                </a>
                                <button
                                    className="btn btn-success"
                                    style={{
                                        float: "right",
                                    }}
                                    disabled={processing}
                                >
                                    <i className="fa fa-check"></i>
                                    &nbsp;Update
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SEOInformation;
