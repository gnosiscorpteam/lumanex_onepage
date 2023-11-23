import React from "react";
import { aboutusContent } from "../assests/content/aboutus";
import { Formik } from "formik";
import Input from "../component/input";
import { useSnackbar } from "notistack";
import axios from "axios";
import { API_BASIC_URL } from "../assests/config";
import { supportInfo } from "../assests/content/contactInfo";

const ContactUs = () => {
    const { enqueueSnackbar } = useSnackbar();
    return (
        <div className="flex flex-col items-center py-[8vh]" id="contactus">
            <div className="flex flex-col items-center max-w-[90vw] xl:max-w-[80vw] 2xl:max-w-[60vw]">
                <div className="border-b-2 border-[black] px-[2vw] py-2 mb-5">
                    <p className="text-[24px] font-semibold">Contact Us</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            email: "",
                            msg: "",
                            support: "support@lumanexgroup.com"
                        }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = "Required";
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                    values.email
                                )
                            ) {
                                errors.email = "Invalid email address";
                            }
                            if (!values.firstName) {
                                errors.firstName = "Required";
                            }
                            if (!values.lastName) {
                                errors.lastName = "Required";
                            }
                            if (!values.msg) {
                                errors.msg = "Required";
                            }
                            return errors;
                        }}
                        onSubmit={async (values, { setSubmitting, resetForm }) => {
                            setSubmitting(false);
                            resetForm();
                            await axios
                                .post(`${API_BASIC_URL}/contact`, values)
                                .then(res => {
                                    console.log("res", res.data.status);
                                    if (res.data.status) {
                                        enqueueSnackbar("Message Success!", {
                                            variant: "success"
                                        });
                                    }
                                })
                                .catch(error => {
                                    console.log("error", error);
                                    enqueueSnackbar("Message Failed!", {
                                        variant: "error"
                                    });
                                });
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting
                        }) =>
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col justify-between w-full h-[500px] bg-text_base p-8 rounded-n">
                                    <div className="grid grid-cols-2 gap-[4vw] mb-8 lg:mb-[0px]">
                                        <Input
                                            label="First Name"
                                            placeholder="John"
                                            error={errors.firstName ? "error" : null}
                                            type="text"
                                            name="firstName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.firstName}
                                        />
                                        <Input
                                            label="Last Name"
                                            placeholder="Dae"
                                            error={errors.lastName ? "error" : null}
                                            type="text"
                                            name="lastName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lastName}
                                        />
                                    </div>
                                    <div className="mb-8 lg:mb-[0px]">
                                        <Input
                                            label="Email"
                                            placeholder="john@dae.com"
                                            error={errors.email ? "error" : null}
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                    </div>
                                    <textarea
                                        className="bg-textarea resize-y rounded-n p-3 mb-8 lg:mb-[0px] w-full border-b-2 border-[black] bg-[#EFEFEF]"
                                        placeholder="Type your message here..."
                                        rows="5"
                                        type="text"
                                        name="msg"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.msg}
                                    />
                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`rounded-full bg-secondary text-[white] px-12 py-2 bg-[#C72C2B] hover:shadow-xl shadow-[#C72C2B]`}
                                        >
                                            <span className="text-xl">Send Now</span>
                                        </button>
                                    </div>
                                </div>
                            </form>}
                    </Formik>
                    <div className="h-full flex items-start">
                        <div className="p-8">
                            <p className="pt-[3vh] text-[20px] font-medium">Business Consultants</p>
                            {supportInfo.map((item, index) => {
                                return (
                                    <div key={index} className="flex items-center mt-8 min-w-[250px]">
                                        <img src={item.icon} className="mr-2" />
                                        <a className="text-[14px]" href={item.title}>
                                            {item.info}
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;