
import React, { useState } from 'react';
import RoundCornerWrapper from "../RoundCornerWrapper";
import Image from "next/image";

const services = [
  "UI UX / Branding",
  "Development",
  "Design + Development",
  "Not Sure",
];

const budgets = ["Under $3k", "$3k–5k", "$5k–10k", "$10k+", "Not sure"];

const RequestQuoteForm = () => {
  const [selectedService, setSelectedService] = useState<string>("");
  const [showServiceDropdown, setShowServiceDropdown] = useState<boolean>(false);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [showBudgetDropdown, setShowBudgetDropdown] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [projectDetail, setProjectDetail] = useState<string>("");
  const [errors, setErrors] = useState<any>({});
  const [touched, setTouched] = useState<any>({});
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [formMessage, setFormMessage] = useState<string>("");
  const [formSubmitLoading, setFormSubmitLoading] = useState(false)

  const validationSchema: any = {
    fullName: {
      required: true,
      message: "Full name is required.",
    },
    companyName: {
      required: false,
      message: "Company name is required.",
    },
    phoneNumber: {
      required: true,
      message: "Phone number is required.",
    },
    email: {
      required: true,
      message: "Email is required.",
      validate: (value: any) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Please enter a valid email address.",
    },
    selectedService: {
      required: false,
      message: "Service required is required.",
    },
    selectedBudget: {
      required: false,
      message: "Project budget is required.",
    },
    projectDetail: {
      required: true,
      message: "Project detail is required.",
    },
  };

  const getFieldValue = (field: any) => {
    switch (field) {
      case "fullName":
        return fullName;
      case "companyName":
        return companyName;
      case "phoneNumber":
        return phoneNumber;
      case "email":
        return email;
      case "selectedService":
        return selectedService;
      case "selectedBudget":
        return selectedBudget;
      case "projectDetail":
        return projectDetail;
      default:
        return "";
    }
  };

  const validateField = (field: any) => {
    const schema = validationSchema[field];
    if (!schema) return;

    const value = getFieldValue(field);
    let error = "";

    if (schema.required && !value.trim()) {
      error = schema.message;
    } else if (schema?.validate) {
      const valRes = schema?.validate(value);
      if (typeof valRes === "string") error = valRes;
    }

    setErrors((prev: any) => ({ ...prev, [field]: error }));
  };

  const handleBlur = (field: any) => {
    // setTouched((prev: any) => ({ ...prev, [field]: true }));
    // validateField(field);
  };

  const handleChange = (field: any, value: any) => {
    switch (field) {
      case "fullName":
        setFullName(value);
        break;
      case "companyName":
        setCompanyName(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "projectDetail":
        setProjectDetail(value);
        break;
      default:
        break;
    }
    // if (touched[field]) {
    //   validateField(field);
    // }
  };

  const handleSelectService = (service: any) => {
    setSelectedService(service);
    setShowServiceDropdown(false);
    // if (touched?.selectedService) {
    //   validateField("selectedService");
    // }
  };

  const handleSelectBudget = (budget: any) => {
    setSelectedBudget(budget);
    setShowBudgetDropdown(false);
    // if (touched?.selectedBudget) {
    //   validateField("selectedBudget");
    // }
  };

  const handleDropdownBlur = (field: any) => {
    setTouched((prev: any) => ({ ...prev, [field]: true }));
    validateField(field);
  };

  const handleSubmit = async () => {
    // Mark all fields as touched
    const allTouched: any = Object.keys(validationSchema).reduce(
      (acc: any, key) => {
        acc[key] = true;
        return acc;
      },
      {} as any
    );
    setTouched(allTouched);

    // Validate all fields
    Object.keys(validationSchema).forEach((field) => validateField(field));

    // Check for errors
    const hasErrors = Object.values(errors).some((error: any) => error);
    if (hasErrors) {
      setFormStatus("error");
      setFormMessage("Please fix the errors above to proceed.");
      return;
    }

    setFormSubmitLoading(true)
    setFormMessage("");

    // Prepare data for API call
    const formData = {
      fullName,
      companyName,
      phoneNumber,
      email,
      service: selectedService,
      budget: selectedBudget,
      projectDetail,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        // Reset form
        setFullName("");
        setCompanyName("");
        setPhoneNumber("");
        setEmail("");
        setSelectedService("");
        setSelectedBudget("");
        setProjectDetail("");
        setErrors({});
        setTouched({});
        setFormStatus("success");
        setFormMessage("Your inquiry has been sent successfully!");
      } else {
        setFormStatus("error");
        setFormMessage(result.error || "Failed to send inquiry. Please try again.");
      }
    } catch (error) {
      setFormStatus("error");
      setFormMessage("An unexpected error occurred. Please try again later.");
      console.error("Submission error:", error);
    }
    finally{
      setFormSubmitLoading(false)
    }
  };

  const hasError = (field: any) => touched[field] && errors[field];

  return (
    <div>
      <section className="hidden md:flex">
        <div style={{ width: "100%", display: "flex" }}>
          <div
            className="w-[5%] md:w-[10%]"
            style={{
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div className="w-[89.95%] md:w-[79.95%]">
            <div className="flex">
              <div className="w-[50%] border-r border-r-[#373737] relative group">
                <input
                  type="text"
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  onBlur={() => handleBlur("fullName")}
                  className={`w-full rounded-lg px-4 py-6 text-white placeholder-[rgba(118, 118, 118, 1)] focus:outline-none ${
                    hasError("fullName") ? "border border-red-500" : ""
                  }`}
                  autoComplete="off"
                />
                {hasError("fullName") && (
                  <div className="absolute z-10 bottom-full left-0 mb-2 hidden group-hover:block bg-[#282828] border border-[#393939] text-red-500 text-sm p-2 rounded-[10px] shadow-lg min-w-max">
                    {errors.fullName}
                  </div>
                )}
              </div>

              <div className="w-[50%] relative group">
                <input
                  type="text"
                  placeholder="Company name"
                  value={companyName}
                  onChange={(e) => handleChange("companyName", e.target.value)}
                  onBlur={() => handleBlur("companyName")}
                  className={`w-full rounded-lg px-4 py-6 text-white placeholder-[rgba(118, 118, 118, 1)] focus:outline-none ${
                    hasError("companyName") ? "border border-red-500" : ""
                  }`}
                  autoComplete="off"
                />
                {hasError("companyName") && (
                  <div className="absolute z-10 bottom-full left-0 mb-2 hidden group-hover:block bg-[#282828] border border-[#393939] text-red-500 text-sm p-2 rounded-[10px] shadow-lg min-w-max">
                    {errors.companyName}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className="w-[5.05%] md:w-[10.05%]"
            style={{
              boxSizing: "border-box",
              borderLeft: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>

      <section className="flex md:hidden">
        <div style={{ width: "100%", display: "flex" }}>
          <div
            className="w-[5%] md:w-[10%]"
            style={{
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div className="w-[89.95%] md:w-[79.95%]">
            <div className="flex flex-col">
              <div className="w-[100%]">
                <RoundCornerWrapper>
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Full name"
                      value={fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      onBlur={() => handleBlur("fullName")}
                      className={`w-full rounded-lg px-4 py-6 text-white placeholder-[rgba(118, 118, 118, 1)] focus:outline-none ${
                        hasError("fullName") ? "border border-red-500" : ""
                      }`}
                      autoComplete="off"
                    />
                    {hasError("fullName") && (
                      <div className="absolute z-10 bottom-full left-0 mb-2 hidden group-hover:block bg-[#282828] border border-[#393939] text-red-500 text-sm p-2 rounded-[10px] shadow-lg min-w-max">
                        {errors.fullName}
                      </div>
                    )}
                  </div>
                </RoundCornerWrapper>
              </div>
              <div className="w-[100%]">
                <RoundCornerWrapper>
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Company name"
                      value={companyName}
                      onChange={(e) => handleChange("companyName", e.target.value)}
                      onBlur={() => handleBlur("companyName")}
                      className={`w-full rounded-lg px-4 py-6 text-white placeholder-[rgba(118, 118, 118, 1)] focus:outline-none ${
                        hasError("companyName") ? "border border-red-500" : ""
                      }`}
                      autoComplete="off"
                    />
                    {hasError("companyName") && (
                      <div className="absolute z-10 bottom-full left-0 mb-2 hidden group-hover:block bg-[#282828] border border-[#393939] text-red-500 text-sm p-2 rounded-[10px] shadow-lg min-w-max">
                        {errors.companyName}
                      </div>
                    )}
                  </div>
                </RoundCornerWrapper>
              </div>
              <div className="w-[100%]">
                <RoundCornerWrapper>
                  <div className="relative group">
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={phoneNumber}
                      onChange={(e) => handleChange("phoneNumber", e.target.value)}
                      onBlur={() => handleBlur("phoneNumber")}
                      className={`w-full placeholder-[rgba(118, 118, 118, 1)] rounded-lg px-4 py-6 text-white focus:outline-none ${
                        hasError("phoneNumber") ? "border border-red-500" : ""
                      }`}
                      autoComplete="off"
                    />
                    {hasError("phoneNumber") && (
                      <div className="absolute z-10 bottom-full left-0 mb-2 hidden group-hover:block bg-[#282828] border border-[#393939] text-red-500 text-sm p-2 rounded-[10px] shadow-lg min-w-max">
                        {errors.phoneNumber}
                      </div>
                    )}
                  </div>
                </RoundCornerWrapper>
              </div>
              <div className="w-[100%]">
                <RoundCornerWrapper>
                  <div className="relative group">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      className={`w-full rounded-lg px-4 py-6 text-white placeholder-[rgba(118, 118, 118, 1)] focus:outline-none ${
                        hasError("email") ? "border border-red-500" : ""
                      }`}
                      autoComplete="off"
                    />
                    {hasError("email") && (
                      <div className="absolute z-10 bottom-full left-0 mb-2 hidden group-hover:block bg-[#282828] border border-[#393939] text-red-500 text-sm p-2 rounded-[10px] shadow-lg min-w-max">
                        {errors.email}
                      </div>
                    )}
                  </div>
                </RoundCornerWrapper>
              </div>

              <div className="w-[100%]">
                <RoundCornerWrapper>
                  <div className="relative group" onBlur={() => handleDropdownBlur("selectedService")}>
                    <button
                      onClick={() => setShowServiceDropdown(!showServiceDropdown)}
                      className={`flex justify-between items-center w-full rounded-lg px-4 py-6 focus:outline-none ${
                        hasError("selectedService") ? "border border-red-500" : ""
                      }`}
                    >
                      <span className={selectedService ? "text-white" : "text-[#767676]"}>
                        {selectedService || "Service required"}
                      </span>
                      <Image
                        src="/circle-icon1.png"
                        alt="Dropdown Icon"
                        width={35}
                        height={35}
                        className={`transition-transform ${showServiceDropdown ? "rotate-180" : ""}`}
                      />
                    </button>

                    {showServiceDropdown && (
                      <div className="absolute right-[0px] py-2 z-50 mt-0 w-[100%] md:w-[390px] bg-[#282828] rounded-[30px] shadow-xl border border-[#393939] overflow-hidden">
                        {services.map((service) => (
                          <label
                            key={service + "yaallah"}
                            className="flex items-center text-base font-medium justify-between px-4 py-2 hover:bg-gray-600/50 cursor-pointer transition-colors"
                            onClick={() => handleSelectService(service)}
                          >
                            <span className="text-[#F8F8F8F2] text-sm">{service}</span>
                            <div className="relative">
                              <input
                                type="radio"
                                name="service"
                                value={service}
                                checked={selectedService === service}
                                onChange={() => {}}
                                className="sr-only"
                              />
                              <div
                                className={`w-4 h-4 rounded-full border-2 transition-colors ${
                                  selectedService === service
                                    ? "border-[#727272] bg-[#727272]"
                                    : "border-[#727272] bg-transparent"
                                }`}
                              ></div>
                            </div>
                          </label>
                        ))}
                      </div>
                    )}
                    {hasError("selectedService") && (
                      <div className="absolute z-10 bottom-full left-0 mb-2 hidden group-hover:block bg-[#282828] border border-[#393939] text-red-500 text-sm p-2 rounded-[10px] shadow-lg min-w-max">
                        {errors.selectedService}
                      </div>
                    )}
                  </div>
                </RoundCornerWrapper>
              </div>

              <div className="w-[100%]">
                <RoundCornerWrapper>
                  <div className="relative group" onBlur={() => handleDropdownBlur("selectedBudget")}>
                    <button
                      onClick={() => setShowBudgetDropdown(!showBudgetDropdown)}
                      className={`flex justify-between items-center w-full rounded-lg px-4 py-6 focus:outline-none ${
                        hasError("selectedBudget") ? "border border-red-500" : ""
                      }`}
                    >
                      <span className={selectedBudget ? "text-white" : "text-[#767676]"}>
                        {selectedBudget || "Project Budget"}
                      </span>
                      <Image
                        src="/circle-icon1.png"
                        alt="Dropdown Icon"
                        width={35}
                        height={35}
                        className={`transition-transform ${showBudgetDropdown ? "rotate-180" : ""}`}
                      />
                    </button>

                    {showBudgetDropdown && (
                      <div className="absolute right-[0px] py-2 z-50 mt-0 w-[100%] md:w-[390px] bg-[#282828] rounded-[30px] shadow-xl border border-[#393939] overflow-hidden">
                        {budgets.map((budget) => (
                          <label
                            key={budget + "yaallahbudget"}
                            className="flex items-center text-base font-medium justify-between px-4 py-2 hover:bg-gray-600/50 cursor-pointer transition-colors"
                            onClick={() => handleSelectBudget(budget)}
                          >
                            <span className="text-[#F8F8F8F2] text-sm">{budget}</span>
                            <div className="relative">
                              <input
                                type="radio"
                                name="budget"
                                value={budget}
                                checked={selectedBudget === budget}
                                onChange={() => {}}
                                className="sr-only"
                              />
                              <div
                                className={`w-4 h-4 rounded-full border-2 transition-colors ${
                                  selectedBudget === budget
                                    ? "border-[#727272] bg-[#727272]"
                                    : "border-[#727272] bg-transparent"
                                }`}
                              ></div>
                            </div>
                          </label>
                        ))}
                      </div>
                    )}
                    {hasError("selectedBudget") && (
                      <div className="absolute z-10 bottom-full left-0 mb-2 hidden group-hover:block bg-[#282828] border border-[#393939] text-red-500 text-sm p-2 rounded-[10px] shadow-lg min-w-max">
                        {errors.selectedBudget}
                      </div>
                    )}
                  </div>
                </RoundCornerWrapper>
              </div>

              <div className="w-[100%]">
                <RoundCornerWrapper>
                  <div className="relative group">
                    <textarea
                      placeholder="Project detail"
                      value={projectDetail}
                      onChange={(e) => handleChange("projectDetail", e.target.value)}
                      onBlur={() => handleBlur("projectDetail")}
                      className={`w-full rounded-lg px-4 py-6 text-white placeholder-[#767676] focus:outline-none transition-colors min-h-[200px] resize-y ${
                        hasError("projectDetail") ? "border border-red-500" : ""
                      }`}
                    />
                    {hasError("projectDetail") && (
                      <div className="absolute z-10 bottom-full left-0 mb-2 hidden group-hover:block bg-[#282828] border border-[#393939] text-red-500 text-sm p-2 rounded-[10px] shadow-lg min-w-max">
                        {errors.projectDetail}
                      </div>
                    )}
                  </div>
                </RoundCornerWrapper>
              </div>

              <div className="w-[100%]">
                <RoundCornerWrapper>
                  <div className="w-[100%] p-[20px]">
                    {formStatus && (
                      <div
                        className={`w-[100%] p-4 rounded-[10px] text-sm mb-4 text-white/60`}
                      >
                        {formMessage}
                      </div>
                    )}
                    <p className="text-sm text-white/60">
                      By sending this form I confirm that I have read and accept the{" "}
                      <a
                        href="#"
                        className="text-[#D4541D] hover:text-[#D4541D]/80 transition-colors"
                      >
                        Privacy Policy
                      </a>
                    </p>
                    <div className="w-[100%] pt-[25px] flex justify-start">
                    <button
  disabled={formSubmitLoading}
  onClick={handleSubmit}
  className={`
    // Base styles:
    text-white text-[17px] px-6 py-3 rounded-full transition-colors

    // Ensure a consistent minimum width:
    min-w-[150px]
    
    // Conditional styles based on loading state:
    ${formSubmitLoading
      ? 'bg-[#D4541D]/50 cursor-not-allowed'
      : 'bg-[#D4541D] hover:bg-[#D4541D]/90 cursor-pointer'
    }
  `}
>
  {formSubmitLoading ? (
    <div className="flex items-center justify-center">
      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>
  ) : (
    "Send Inquiry"
  )}
</button>
                    </div>
                  </div>
                </RoundCornerWrapper>
              </div>
            </div>
          </div>
          <div
            className="w-[5.05%] md:w-[10.05%]"
            style={{
              boxSizing: "border-box",
              borderLeft: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>

      <section className="hidden md:flex">
        <div style={{ width: "100%", display: "flex" }}>
          <div
            className="w-[5%] md:w-[10%]"
            style={{
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div className="w-[89.95%] md:w-[79.95%]">
            <div className="flex">
              <div className="w-[50%]">
                <RoundCornerWrapper>
                  <div className="relative group">
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={phoneNumber}
                      onChange={(e) => handleChange("phoneNumber", e.target.value)}
                      onBlur={() => handleBlur("phoneNumber")}
                      className={`w-full placeholder-[rgba(118, 118, 118, 1)] rounded-lg px-4 py-6 text-white focus:outline-none ${
                        hasError("phoneNumber") ? "border border-red-500" : ""
                      }`}
                      autoComplete="off"
                    />
                    {hasError("phoneNumber") && (
                      <div className="absolute z-10 bottom-full left-0 mb-2 hidden group-hover:block bg-[#282828] border border-[#393939] text-red-500 text-sm p-2 rounded-[10px] shadow-lg min-w-max">
                        {errors.phoneNumber}
                      </div>
                    )}
                  </div>
                </RoundCornerWrapper>
              </div>

              <div className="w-1/2 relative border-t border-b border-t-[#373737] border-b-[#373737]">
                <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -top-[5px] -right-[5px]"></div>
                <div className="w-[9px] h-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px]"></div>
                <div className="relative group">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    className={`w-full rounded-lg px-4 py-6 text-white placeholder-[rgba(118, 118, 118, 1)] focus:outline-none ${
                      hasError("email") ? "border border-red-500" : ""
                    }`}
                    autoComplete="off"
                  />
                  {hasError("email") && (
                    <div className="absolute z-10 bottom-full left-0 mb-2 hidden group-hover:block bg-[#282828] border border-[#393939] text-red-500 text-sm p-2 rounded-[10px] shadow-lg min-w-max">
                      {errors.email}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[5.05%] md:w-[10.05%]"
            style={{
              boxSizing: "border-box",
              borderLeft: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>

      <section className="hidden md:flex">
        <div style={{ width: "100%", display: "flex" }}>
          <div
            className="w-[5%] md:w-[10%]"
            style={{
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div className="w-[89.95%] md:w-[79.95%]">
            <div className="flex">
              <div className="w-[50%] border-r border-r-[#373737] relative group" onBlur={() => handleDropdownBlur("selectedService")}>
                <button
                  onClick={() => setShowServiceDropdown(!showServiceDropdown)}
                  className={`flex justify-between items-center w-full rounded-lg px-4 py-6 focus:outline-none ${
                    hasError("selectedService") ? "border border-red-500" : ""
                  }`}
                >
                  <span className={selectedService ? "text-white" : "text-[#767676]"}>
                    {selectedService || "Service required"}
                  </span>
                  <Image
                    src="/circle-icon1.png"
                    alt="Dropdown Icon"
                    width={35}
                    height={35}
                    className={`transition-transform ${showServiceDropdown ? "rotate-180" : ""}`}
                  />
                </button>

                {showServiceDropdown && (
                  <div className="absolute right-[0px] py-2 z-50 mt-0 w-[100%] md:w-[390px] bg-[#282828] rounded-[30px] shadow-xl border border-[#393939] overflow-hidden">
                    {services.map((service) => (
                      <label
                        key={service + "yaallah"}
                        className="flex items-center text-base font-medium justify-between px-4 py-2 hover:bg-gray-600/50 cursor-pointer transition-colors"
                        onClick={() => handleSelectService(service)}
                      >
                        <span className="text-[#F8F8F8F2] text-sm">{service}</span>
                        <div className="relative">
                          <input
                            type="radio"
                            name="service"
                            value={service}
                            checked={selectedService === service}
                            onChange={() => {}}
                            className="sr-only"
                          />
                          <div
                            className={`w-4 h-4 rounded-full border-2 transition-colors ${
                              selectedService === service
                                ? "border-[#727272] bg-[#727272]"
                                : "border-[#727272] bg-transparent"
                            }`}
                          ></div>
                        </div>
                      </label>
                    ))}
                  </div>
                )}
                {hasError("selectedService") && (
                  <div className="absolute z-10 bottom-full left-0 mb-2 hidden group-hover:block bg-[#282828] border border-[#393939] text-red-500 text-sm p-2 rounded-[10px] shadow-lg min-w-max">
                    {errors.selectedService}
                  </div>
                )}
              </div>

              <div className="w-[50%] relative group" onBlur={() => handleDropdownBlur("selectedBudget")}>
                <button
                  onClick={() => setShowBudgetDropdown(!showBudgetDropdown)}
                  className={`flex justify-between items-center w-full rounded-lg px-4 py-6 focus:outline-none ${
                    hasError("selectedBudget") ? "border border-red-500" : ""
                  }`}
                >
                  <span className={selectedBudget ? "text-white" : "text-[#767676]"}>
                    {selectedBudget || "Project Budget"}
                  </span>
                  <Image
                    src="/circle-icon1.png"
                    alt="Dropdown Icon"
                    width={35}
                    height={35}
                    className={`transition-transform ${showBudgetDropdown ? "rotate-180" : ""}`}
                  />
                </button>

                {showBudgetDropdown && (
                  <div className="absolute right-[0px] py-2 z-50 mt-0 w-[100%] md:w-[390px] bg-[#282828] rounded-[30px] shadow-xl border border-[#393939] overflow-hidden">
                    {budgets.map((budget) => (
                      <label
                        key={budget + "yaallahbudget"}
                        className="flex items-center text-base font-medium justify-between px-4 py-2 hover:bg-gray-600/50 cursor-pointer transition-colors"
                        onClick={() => handleSelectBudget(budget)}
                      >
                        <span className="text-[#F8F8F8F2] text-sm">{budget}</span>
                        <div className="relative">
                          <input
                            type="radio"
                            name="budget"
                            value={budget}
                            checked={selectedBudget === budget}
                            onChange={() => {}}
                            className="sr-only"
                          />
                          <div
                            className={`w-4 h-4 rounded-full border-2 transition-colors ${
                              selectedBudget === budget
                                ? "border-[#727272] bg-[#727272]"
                                : "border-[#727272] bg-transparent"
                            }`}
                          ></div>
                        </div>
                      </label>
                    ))}
                  </div>
                )}
                {hasError("selectedBudget") && (
                  <div className="absolute z-10 bottom-full left-0 mb-2 hidden group-hover:block bg-[#282828] border border-[#393939] text-red-500 text-sm p-2 rounded-[10px] shadow-lg min-w-max">
                    {errors.selectedBudget}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className="w-[5.05%] md:w-[10.05%]"
            style={{
              boxSizing: "border-box",
              borderLeft: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>

      <section className="hidden md:flex">
        <div style={{ width: "100%", display: "flex" }}>
          <div
            className="w-[5%] md:w-[10%]"
            style={{
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div className="w-[89.95%] md:w-[79.95%]">
            <div className="flex">
              <div className="w-[100%]">
                <RoundCornerWrapper right={false} left={false}>
                  <div className="relative group">
                    <textarea
                      placeholder="Project detail"
                      value={projectDetail}
                      onChange={(e) => handleChange("projectDetail", e.target.value)}
                      onBlur={() => handleBlur("projectDetail")}
                      className={`w-full rounded-lg px-4 py-6 text-white placeholder-[#767676] focus:outline-none transition-colors min-h-[200px] resize-y ${
                        hasError("projectDetail") ? "border border-red-500" : ""
                      }`}
                    />
                    {hasError("projectDetail") && (
                      <div className="absolute z-10 bottom-full left-0 mb-2 hidden group-hover:block bg-[#282828] border border-[#393939] text-red-500 text-sm p-2 rounded-[10px] shadow-lg min-w-max">
                        {errors.projectDetail}
                      </div>
                    )}
                  </div>
                </RoundCornerWrapper>
              </div>
            </div>
          </div>
          <div
            className="w-[5.05%] md:w-[10.05%]"
            style={{
              boxSizing: "border-box",
              borderLeft: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>

      <section className="hidden md:flex">
        <div style={{ width: "100%", display: "flex" }}>
          <div
            className="w-[5%] md:w-[10%]"
            style={{
              boxSizing: "border-box",
              borderRight: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
          <div className="w-[89.95%] md:w-[79.95%]">
            <div className="flex">
              <div className="w-[50%] p-8 xl:pt-12" style={{ position: "relative" }}>
                <div className="w-[9px] rounded-full bg-[#373737] absolute -bottom-[5px] -right-[5px]"></div>
                <div className="w-[60%]">
                  <p className="text-sm text-white/60">
                    By sending this form I confirm that I have read and accept the{" "}
                    <a
                      href="#"
                      className="text-[#D4541D] hover:text-[#D4541D]/80 transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
              <div className="w-[50%] p-8 flex justify-end align-text-bottom">
                {formStatus && (
                  <div
                    className={`w-[100%] p-4 rounded-[10px] text-sm text-white/60  `
                    
                    }
                  >
                    {formMessage}
                  </div>
                )}
                {/* <button
                 disabled={formSubmitLoading}
                  onClick={handleSubmit}
                  className="bg-[#D4541D] hover:bg-[#D4541D]/90 whitespace-nowrap text-white text-[17px] px-6 py-3 rounded-full transition-colors cursor-pointer"
                >
                  Send Inquiry
                </button> */}
 <button
  disabled={formSubmitLoading}
  onClick={handleSubmit}
  className={`
    // Base styles:
    text-white text-[17px] px-6 py-3 rounded-full transition-colors

    // Ensure a consistent minimum width:
    min-w-[150px]
    
    // Conditional styles based on loading state:
    ${formSubmitLoading
      ? 'bg-[#D4541D]/50 cursor-not-allowed'
      : 'bg-[#D4541D] hover:bg-[#D4541D]/90 cursor-pointer'
    }
  `}
>
  {formSubmitLoading ? (
    <div className="flex items-center justify-center">
      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>
  ) : (
    "Send Inquiry"
  )}
</button>
              </div>
            </div>
          </div>
          <div
            className="w-[5.05%] md:w-[10.05%]"
            style={{
              boxSizing: "border-box",
              borderLeft: "1px solid #373737",
              borderBottom: "1px solid #373737",
            }}
          ></div>
        </div>
      </section>
    </div>
  );
};

export default RequestQuoteForm;