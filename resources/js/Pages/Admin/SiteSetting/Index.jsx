import { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputGroup from "@/Components/InputGroup";
import TextareaGroup from "@/Components/TextareaGroup";
import TagInput from "@/Components/TagInput";
import Breadcrumb from "@/Components/Breadcrumb";

export default function Dashboard({ auth }) {
    const [PageTitle, setPageTitle] = useState("Site Setting Information");
    const HandleHeadTitle = (value) => {
        setPageTitle(value);
    };

    return (
        <>
            <AuthenticatedLayout>
                <Head title={PageTitle} />
                <div className="container-fluid">
                    <Breadcrumb />

                    <div className="card">
                        <div className="card-body">
                            <div>
                                <ul className="nav nav-tabs" role="tablist">
                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <Link
                                            className="nav-link d-flex active"
                                            data-bs-toggle="tab"
                                            href="#home2"
                                            role="tab"
                                            aria-selected="true"
                                            onClick={() =>
                                                HandleHeadTitle(
                                                    "Site Setting Information"
                                                )
                                            }
                                        >
                                            <span>
                                                <i className="ti ti-home-2 fs-4"></i>
                                            </span>
                                            <span className="d-none d-md-block ms-2">
                                                Website Information
                                            </span>
                                        </Link>
                                    </li>
                                    <li
                                        className="nav-item"
                                        role="presentation"
                                    >
                                        <Link
                                            className="nav-link d-flex"
                                            data-bs-toggle="tab"
                                            href="#profile2"
                                            role="tab"
                                            aria-selected="false"
                                            tabIndex="-1"
                                            onClick={() =>
                                                HandleHeadTitle(
                                                    "Update Meta Information"
                                                )
                                            }
                                        >
                                            <span>
                                                <i className="ti ti-seo fs-4"></i>
                                            </span>
                                            <span className="d-none d-md-block ms-2">
                                                Meta/OG Information
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div
                                        className="tab-pane active show"
                                        id="home2"
                                        role="tabpanel"
                                    >
                                        <div className="p-3">
                                            <form
                                                action="https://beta.hamrocsit.com/admin/site-management/update"
                                                method="POST"
                                                encType="multipart/form-data"
                                            >
                                                <div className="row">
                                                    {/* <div className="col-md-4">
                                                        <div className="input-group mb-3">
                                                            <span
                                                                className="input-group-text"
                                                                id="basic-addon1"
                                                            >
                                                                <i className="fa fa-image"></i>
                                                                &nbsp;Site Logo
                                                            </span>
                                                            <div className="dropify-wrapper has-preview">
                                                                <div className="dropify-message">
                                                                    <span className="file-icon"></span>{" "}
                                                                    <p>
                                                                        Drag and
                                                                        drop a
                                                                        file
                                                                        here or
                                                                        click
                                                                    </p>
                                                                    <p className="dropify-error">
                                                                        Ooops,
                                                                        something
                                                                        wrong
                                                                        appended.
                                                                    </p>
                                                                </div>
                                                                <div
                                                                    className="dropify-loader"
                                                                    style={{
                                                                        display:
                                                                            "none",
                                                                    }}
                                                                ></div>
                                                                <div className="dropify-errors-container">
                                                                    <ul></ul>
                                                                </div>
                                                                <input
                                                                    type="file"
                                                                    className="dropify "
                                                                    name="logo"
                                                                    data-default-file="http://beta.hamrocsit.com/storage/setting"
                                                                    data-max-width="314"
                                                                    data-max-height="230"
                                                                    data-show-remove="false"
                                                                    data-allowed-file-extensions="jpeg png jpg"
                                                                />
                                                                <div
                                                                    className="dropify-preview"
                                                                    style={{
                                                                        display:
                                                                            "block",
                                                                    }}
                                                                >
                                                                    <span className="dropify-render">
                                                                        <i className="dropify-font-file"></i>
                                                                        <span className="dropify-extension">
                                                                            setting
                                                                        </span>
                                                                    </span>
                                                                    <div className="dropify-infos">
                                                                        <div className="dropify-infos-inner">
                                                                            <p className="dropify-filename">
                                                                                <span className="file-icon"></span>{" "}
                                                                                <span className="dropify-filename-inner">
                                                                                    setting
                                                                                </span>
                                                                            </p>
                                                                            <p className="dropify-infos-message">
                                                                                Drag
                                                                                and
                                                                                drop
                                                                                or
                                                                                click
                                                                                to
                                                                                replace
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span className="alert alert-warning w-100">
                                                                <i className="fa fa-info"></i>
                                                                &nbsp;
                                                                Recommended
                                                                Size: 314 X 230
                                                                px
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="input-group mb-3">
                                                            <span
                                                                className="input-group-text"
                                                                id="basic-addon1"
                                                            >
                                                                <i className="fa fa-image"></i>
                                                                &nbsp;Favicon
                                                            </span>
                                                            <div className="dropify-wrapper has-preview">
                                                                <div className="dropify-message">
                                                                    <span className="file-icon"></span>{" "}
                                                                    <p>
                                                                        Drag and
                                                                        drop a
                                                                        file
                                                                        here or
                                                                        click
                                                                    </p>
                                                                    <p className="dropify-error">
                                                                        Ooops,
                                                                        something
                                                                        wrong
                                                                        appended.
                                                                    </p>
                                                                </div>
                                                                <div
                                                                    className="dropify-loader"
                                                                    style={{
                                                                        display:
                                                                            "none",
                                                                    }}
                                                                ></div>
                                                                <div className="dropify-errors-container">
                                                                    <ul></ul>
                                                                </div>
                                                                <input
                                                                    type="file"
                                                                    className="dropify "
                                                                    name="favicon"
                                                                    data-default-file="http://beta.hamrocsit.com/storage/setting"
                                                                    data-show-remove="false"
                                                                    data-max-width="32"
                                                                    data-max-height="32"
                                                                    data-allowed-file-extensions="jpeg png jpg"
                                                                />
                                                                <div
                                                                    className="dropify-preview"
                                                                    style={{
                                                                        display:
                                                                            "block",
                                                                    }}
                                                                >
                                                                    <span className="dropify-render">
                                                                        <i className="dropify-font-file"></i>
                                                                        <span className="dropify-extension">
                                                                            setting
                                                                        </span>
                                                                    </span>
                                                                    <div className="dropify-infos">
                                                                        <div className="dropify-infos-inner">
                                                                            <p className="dropify-filename">
                                                                                <span className="file-icon"></span>{" "}
                                                                                <span className="dropify-filename-inner">
                                                                                    setting
                                                                                </span>
                                                                            </p>
                                                                            <p className="dropify-infos-message">
                                                                                Drag
                                                                                and
                                                                                drop
                                                                                or
                                                                                click
                                                                                to
                                                                                replace
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span className="alert alert-warning w-100">
                                                                <i className="fa fa-info"></i>
                                                                &nbsp;
                                                                Recommended
                                                                Size: 32 X 32 px
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="input-group mb-3">
                                                            <span
                                                                className="input-group-text"
                                                                id="basic-addon1"
                                                            >
                                                                <i className="ti ti-brand-apple"></i>
                                                                &nbsp;Apple_touch
                                                            </span>
                                                            <div className="dropify-wrapper has-preview">
                                                                <div className="dropify-message">
                                                                    <span className="file-icon"></span>{" "}
                                                                    <p>
                                                                        Drag and
                                                                        drop a
                                                                        file
                                                                        here or
                                                                        click
                                                                    </p>
                                                                    <p className="dropify-error">
                                                                        Ooops,
                                                                        something
                                                                        wrong
                                                                        appended.
                                                                    </p>
                                                                </div>
                                                                <div
                                                                    className="dropify-loader"
                                                                    style={{
                                                                        display:
                                                                            "none",
                                                                    }}
                                                                ></div>
                                                                <div className="dropify-errors-container">
                                                                    <ul></ul>
                                                                </div>
                                                                <input
                                                                    type="file"
                                                                    className="dropify "
                                                                    name="apple_touch"
                                                                    data-default-file="http://beta.hamrocsit.com/storage/setting"
                                                                    data-show-remove="false"
                                                                    data-min-width="180"
                                                                    data-min-height="180"
                                                                    data-allowed-file-extensions="jpeg png jpg"
                                                                />
                                                                <div
                                                                    className="dropify-preview"
                                                                    style={{
                                                                        display:
                                                                            "block",
                                                                    }}
                                                                >
                                                                    <span className="dropify-render">
                                                                        <i className="dropify-font-file"></i>
                                                                        <span className="dropify-extension">
                                                                            setting
                                                                        </span>
                                                                    </span>
                                                                    <div className="dropify-infos">
                                                                        <div className="dropify-infos-inner">
                                                                            <p className="dropify-filename">
                                                                                <span className="file-icon"></span>{" "}
                                                                                <span className="dropify-filename-inner">
                                                                                    setting
                                                                                </span>
                                                                            </p>
                                                                            <p className="dropify-infos-message">
                                                                                Drag
                                                                                and
                                                                                drop
                                                                                or
                                                                                click
                                                                                to
                                                                                replace
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span className="alert alert-warning w-100">
                                                                <i className="fa fa-info"></i>
                                                                &nbsp;
                                                                Recommended
                                                                Size: 180 X 180
                                                                px
                                                            </span>
                                                        </div>
                                                    </div> */}

                                                    <div className="col-md-6">
                                                        <InputGroup
                                                            label="Name"
                                                            icon="ti ti-user"
                                                            name="name"
                                                            required={true}
                                                            defaultValue=""
                                                            placeholder="Enter Name"
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <InputGroup
                                                            label="Email"
                                                            icon="ti ti-mail"
                                                            name="email"
                                                            required={true}
                                                            defaultValue=""
                                                            placeholder="someone@example.com"
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <InputGroup
                                                            label="Contact No."
                                                            icon="ti ti-mobile"
                                                            name="contact_no"
                                                            defaultValue=""
                                                            placeholder="+1(xxx) xxx-xxxx"
                                                        />
                                                    </div>
                                                    <div className="col-md-6"></div>

                                                    <div className="col-md-6">
                                                        <InputGroup
                                                            label="Facebook URL"
                                                            icon="ti ti-brand-facebook"
                                                            name="facebook_url"
                                                            defaultValue=""
                                                            placeholder="https://facebook.com/"
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <InputGroup
                                                            label="Instagram URL"
                                                            icon="ti ti-brand-instagram"
                                                            name="instagram_url"
                                                            defaultValue=""
                                                            placeholder="https://instagram.com/"
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <InputGroup
                                                            label="LinkedIn URL"
                                                            icon="ti ti-brand-linkedin"
                                                            name="linkedIn_url"
                                                            defaultValue=""
                                                            placeholder="https://linkedin.com/"
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <InputGroup
                                                            label="X URL"
                                                            icon="ti ti-brand-x"
                                                            name="x_url"
                                                            defaultValue=""
                                                            placeholder="https://x.com/"
                                                        />
                                                    </div>

                                                    <div className="col-md-6">
                                                        <InputGroup
                                                            label="GitHub URL"
                                                            icon="ti ti-brand-github"
                                                            name="github_url"
                                                            defaultValue=""
                                                            placeholder="https://github.com/"
                                                        />
                                                    </div>

                                                    <div className="col-6"></div>

                                                    <div className="col-md-12">
                                                        <TextareaGroup
                                                            label="Address"
                                                            icon="ti ti-map-pin"
                                                            name="address"
                                                            rows="3"
                                                        />
                                                    </div>

                                                    <div className="col-md-12">
                                                        <TagInput />
                                                    </div>
                                                </div>
                                                <div className="card-foot">
                                                    <div className="col-md-12">
                                                        <a
                                                            href="https://beta.hamrocsit.com/admin"
                                                            className="btn btn-danger"
                                                        >
                                                            <i className="fa fa-times"></i>
                                                            &nbsp;Cancel
                                                        </a>
                                                        <button
                                                            className="btn btn-success"
                                                            style={{
                                                                float: "right",
                                                            }}
                                                        >
                                                            <i className="fa fa-check"></i>
                                                            &nbsp;Update
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane p-3"
                                        id="profile2"
                                        role="tabpanel"
                                    >
                                        <div className="p-3">
                                            <div className="row">
                                                <form
                                                    action="https://beta.hamrocsit.com/admin/site-management/update-seo"
                                                    method="POST"
                                                    encType="multipart/form-data"
                                                >
                                                    <div className="row form-group">
                                                        <div className="col-md-12">
                                                            <div className="input-group mb-3">
                                                                <span
                                                                    className="input-group-text"
                                                                    id="basic-addon1"
                                                                >
                                                                    <i className="fa fa-text-width"></i>
                                                                    &nbsp;Meta
                                                                    OG Title
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    className="form-control "
                                                                    name="meta_og_title"
                                                                    placeholder="Enter Meta And OG Title"
                                                                    defaultValue="meta title"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="input-group mb-3">
                                                                <span
                                                                    className="input-group-text"
                                                                    id="basic-addon1"
                                                                >
                                                                    <i className="fa fa-text-width"></i>
                                                                    &nbsp;Meta
                                                                    Keywords
                                                                </span>
                                                                <textarea
                                                                    name="meta_keywords"
                                                                    className="form-control "
                                                                    cols="30"
                                                                    rows="4"
                                                                ></textarea>
                                                                <span className="alert alert-warning w-100">
                                                                    <i className="fa fa-info"></i>
                                                                    &nbsp;Maximum
                                                                    keywords
                                                                    allowed: 10
                                                                </span>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="input-group mb-3">
                                                                    <span
                                                                        className="input-group-text"
                                                                        id="basic-addon1"
                                                                    >
                                                                        <i className="fa fa-text-width"></i>
                                                                        &nbsp;Meta
                                                                        OG
                                                                        Description
                                                                    </span>
                                                                    <textarea
                                                                        name="meta_og_description"
                                                                        className="form-control "
                                                                        cols="30"
                                                                        rows="4"
                                                                    ></textarea>
                                                                    <span className="alert alert-warning w-100">
                                                                        <i className="fa fa-info"></i>
                                                                        &nbsp;Characters
                                                                        must be
                                                                        between
                                                                        155 -
                                                                        160
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="input-group mb-3">
                                                                    <span
                                                                        className="input-group-text"
                                                                        id="basic-addon1"
                                                                    >
                                                                        <i className="fa fa-image"></i>
                                                                        &nbsp;OG
                                                                        Image
                                                                    </span>
                                                                    <div className="dropify-wrapper has-preview">
                                                                        <div className="dropify-message">
                                                                            <span className="file-icon"></span>{" "}
                                                                            <p>
                                                                                Drag
                                                                                and
                                                                                drop
                                                                                a
                                                                                file
                                                                                here
                                                                                or
                                                                                click
                                                                            </p>
                                                                            <p className="dropify-error">
                                                                                Ooops,
                                                                                something
                                                                                wrong
                                                                                appended.
                                                                            </p>
                                                                        </div>
                                                                        <div
                                                                            className="dropify-loader"
                                                                            style={{
                                                                                display:
                                                                                    "none",
                                                                            }}
                                                                        ></div>
                                                                        <div className="dropify-errors-container">
                                                                            <ul></ul>
                                                                        </div>
                                                                        <input
                                                                            type="file"
                                                                            className="dropify "
                                                                            name="og_image"
                                                                            data-default-file="http://beta.hamrocsit.com/storage/setting"
                                                                            data-show-remove="false"
                                                                        />
                                                                        <div
                                                                            className="dropify-preview"
                                                                            style={{
                                                                                display:
                                                                                    "block",
                                                                            }}
                                                                        >
                                                                            <span className="dropify-render">
                                                                                <i className="dropify-font-file"></i>
                                                                                <span className="dropify-extension">
                                                                                    setting
                                                                                </span>
                                                                            </span>
                                                                            <div className="dropify-infos">
                                                                                <div className="dropify-infos-inner">
                                                                                    <p className="dropify-filename">
                                                                                        <span className="file-icon"></span>{" "}
                                                                                        <span className="dropify-filename-inner">
                                                                                            setting
                                                                                        </span>
                                                                                    </p>
                                                                                    <p className="dropify-infos-message">
                                                                                        Drag
                                                                                        and
                                                                                        drop
                                                                                        or
                                                                                        click
                                                                                        to
                                                                                        replace
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-footer py-4">
                                                            <a
                                                                href="https://beta.hamrocsit.com/admin"
                                                                className="btn btn-danger"
                                                            >
                                                                <i className="fa fa-times"></i>
                                                                &nbsp;Cancel
                                                            </a>
                                                            <button
                                                                className="btn btn-success"
                                                                style={{
                                                                    float: "right",
                                                                }}
                                                            >
                                                                <i className="fa fa-check"></i>
                                                                &nbsp;Update
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
