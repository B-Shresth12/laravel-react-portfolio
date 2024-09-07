import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { getImageUrl, getDefaultImage, getObjectUrl } from "@/Helper/Helper";
import InputGroup from "@/Components/InputGroup";
import TextareaGroup from "@/Components/TextareaGroup";
import InputError from "@/Components/InputError";
import InputFile from "@/Components/InputFile";

function WebsiteInformation({ index, errors, setting }) {
    const { data, setData, post, processing } = useForm({
        favicon: null,
        apple_touch: null,
        name: setting ? setting.name : "",
        email: setting ? setting.email : "",
        contact_no: setting ? setting.contact_no : "",
        facebook_url: setting ? setting.facebook_url : "",
        instagram_url: setting ? setting.instagram_url : "",
        linkedIn_url: setting ? setting.linkedIn_url : "",
        x_url: setting ? setting.x_url : "",
        github_url: setting ? setting.github_url : "",
        address: setting ? setting.address : "",
        who_are_you: setting ? setting.who_are_you : "",
        banner: null,
    });

    const [favicon, setFavicon] = useState(
        setting
            ? getImageUrl(`storage/setting/${setting.favicon}`)
            : getDefaultImage(300, 200)
    );
    const [appleTouch, setAppleTouch] = useState(
        setting
            ? getImageUrl(`storage/setting/${setting.apple_touch}`)
            : getDefaultImage(300, 200)
    );
    const [banner, setBanner] = useState(
        setting
            ? getImageUrl(`storage/setting/${setting.banner}`)
            : getDefaultImage(1920, 1053)
    );

    const setFile = (name, file) => {
        setData(name, file);
        switch (name) {
            case "favicon":
                setFavicon(getObjectUrl(file));
                break;
            case "apple_touch":
                setAppleTouch(getObjectUrl(file));
                break;
            case "banner":
                setBanner(getObjectUrl(file));
        }
    };

    const [tags, setTags] = useState(data.who_are_you.split(",") ?? []);

    function handleTagsChange(value) {
        const newTags = value.split(","); // Assuming tags are comma-separated
        setTags(newTags);
    }

    const submitForm = (e) => {
        e.preventDefault();
        post(route("admin.setting.update"));
    };
    return (
        <div
            className="tab-pane p-3 active show"
            id={`tab${index}`}
            role="tabpanel"
        >
            <div className="p-3">
                <form onSubmit={submitForm}>
                    <div className="row">
                        <div className="card">
                            <div className="card-body row">
                                <div className="col-md-6">
                                    <InputFile
                                        src={favicon}
                                        alt="favicon"
                                        recommendedSize="32 x 32"
                                        label="Favicon"
                                        icon="fa fa-image"
                                        name="favicon"
                                        error={errors.favicon}
                                        accept=".jpg, .jpeg, .png"
                                        required={setting ? false : true}
                                        onChange={(e) =>
                                            setFile(
                                                "favicon",
                                                e.target.files[0]
                                            )
                                        }
                                    />
                                </div>
                                <div className="col-md-6">
                                    <InputFile
                                        src={appleTouch}
                                        alt="apple_touch"
                                        recommendedSize="152 x 152"
                                        label="Apple Touch"
                                        icon="fa fa-image"
                                        name="apple_touch"
                                        error={errors.apple_touch}
                                        accept=".jpg, .jpeg, .png"
                                        required={setting ? false : true}
                                        onChange={(e) =>
                                            setFile(
                                                "apple_touch",
                                                e.target.files[0]
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <InputGroup
                                label="Name"
                                icon="ti ti-user"
                                name="name"
                                error={errors.name}
                                value={data.name}
                                required={true}
                                placeholder="Enter Name"
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-6">
                            <InputGroup
                                type="email"
                                label="Email"
                                icon="ti ti-mail"
                                name="email"
                                error={errors.email}
                                value={data.email}
                                required={true}
                                placeholder="someone@example.com"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-6">
                            <InputGroup
                                label="Contact No."
                                icon="ti ti-mobile"
                                name="contact_no"
                                error={errors.contact_no}
                                value={data.contact_no}
                                placeholder="+1(xxx) xxx-xxxx"
                                onChange={(e) =>
                                    setData("contact_no", e.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-6"></div>
                        <div className="col-md-6">
                            <InputGroup
                                type="url"
                                label="Facebook URL"
                                icon="ti ti-brand-facebook"
                                name="facebook_url"
                                error={errors.facebook_url}
                                value={data.facebook_url}
                                placeholder="https://facebook.com/"
                                onChange={(e) =>
                                    setData("facebook_url", e.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-6">
                            <InputGroup
                                type="url"
                                label="Instagram URL"
                                icon="ti ti-brand-instagram"
                                name="instagram_url"
                                error={errors.instagram_url}
                                value={data.instagram_url}
                                placeholder="https://instagram.com/"
                                onChange={(e) =>
                                    setData("instagram_url", e.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-6">
                            <InputGroup
                                type="url"
                                label="LinkedIn URL"
                                icon="ti ti-brand-linkedin"
                                name="linkedIn_url"
                                error={errors.linkedIn_url}
                                value={data.linkedIn_url}
                                placeholder="https://linkedin.com/"
                                onChange={(e) =>
                                    setData("linkedIn_url", e.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-6">
                            <InputGroup
                                type="url"
                                label="X URL"
                                icon="ti ti-brand-x"
                                name="x_url"
                                className={errors.x_url}
                                value={data.x_url}
                                placeholder="https://x.com/"
                                onChange={(e) =>
                                    setData("x_url", e.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-6">
                            <InputGroup
                                type="url"
                                label="GitHub URL"
                                icon="ti ti-brand-github"
                                name="github_url"
                                error={errors.github_url}
                                value={data.github_url}
                                placeholder="https://github.com/"
                                onChange={(e) =>
                                    setData("github_url", e.target.value)
                                }
                            />
                        </div>
                        <div className="col-6"></div>
                        <div className="col-md-12">
                            <TextareaGroup
                                label="Address"
                                icon="ti ti-map-pin"
                                name="address"
                                className={errors.address}
                                value={data.address}
                                rows="3"
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                            />
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <TextareaGroup
                                        label="Who are you?"
                                        icon="ti ti-question-mark"
                                        name="who_are_you"
                                        className={
                                            errors.who_are_you
                                                ? "is-invalid"
                                                : ""
                                        }
                                        placeholder="Graphic Designer,Web Developer, App Developer"
                                        style={{
                                            height: "100px",
                                        }}
                                        value={data.who_are_you}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            handleTagsChange(value);
                                            setData(
                                                "who_are_you",
                                                e.target.value
                                            );
                                        }}
                                    />
                                    {errors.who_are_you ? (
                                        <InputError
                                            message={errors.who_are_you}
                                        />
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <div className="col-md-6">
                                    <div>
                                        {tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="badge bg-primary mx-1 mb-1"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <InputFile
                                src={banner}
                                alt="banner"
                                label="Banner"
                                recommendedSize="1920 x 1053"
                                icon="fa fa-image"
                                name="banner"
                                error={errors.banner}
                                accept=".jpg, .jpeg, .png"
                                required={setting ? false : true}
                                onChange={(e) =>
                                    setFile("banner", e.target.files[0])
                                }
                            />
                        </div>
                    </div>
                    <div className="card-foot">
                        <div className="col-md-12">
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
                </form>
            </div>
        </div>
    );
}

export default WebsiteInformation;
