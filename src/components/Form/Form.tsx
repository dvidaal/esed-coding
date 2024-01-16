import Select from "react-select";
import { Category } from "../../types/types";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";
import { useState } from "react";

const categories: Category[] = [
  { value: "select", label: "Choose the answer" },
  { value: "HumanResources", label: "Human Resources" },
  { value: "Finance", label: "Finance" },
  { value: "Marketing", label: "Marketing" },
  { value: "Sales", label: "Sales" },
  { value: "CustomerService", label: "Customer Service" },
  { value: "IT", label: "Information Technology" },
  { value: "Operations", label: "Operations" },
  { value: "Legal", label: "Legal" },
  { value: "Administration", label: "Administration" },
  { value: "ResearchAndDevelopment", label: "Research and Development" },
  { value: "QualityControl", label: "Quality Control" },
  { value: "SupplyChain", label: "Supply Chain" },
  { value: "PublicRelations", label: "Public Relations" },
  { value: "Facilities", label: "Facilities" },
  { value: "Training", label: "Training" },
  { value: "HealthAndSafety", label: "Health and Safety" },
  { value: "ProductManagement", label: "Product Management" },
  { value: "Engineering", label: "Engineering" },
  { value: "Design", label: "Design" },
  { value: "Communication", label: "Communication" },
  { value: "StrategicPlanning", label: "Strategic Planning" },
  { value: "ProjectManagement", label: "Project Management" },
  {
    value: "EnvironmentalSustainability",
    label: "Environmental Sustainability",
  },
  {
    value: "CorporateSocialResponsibility",
    label: "Corporate Social Responsibility",
  },
  { value: "InternalAudit", label: "Internal Audit" },
  { value: "Logistics", label: "Logistics" },
  { value: "InternationalBusiness", label: "International Business" },
  { value: "GovernmentRelations", label: "Government Relations" },
  { value: "CustomerExperience", label: "Customer Experience" },
  { value: "EmployeeRelations", label: "Employee Relations" },
  { value: "DiversityAndInclusion", label: "Diversity and Inclusion" },
  { value: "EthicsAndCompliance", label: "Ethics and Compliance" },
  { value: "TrainingAndDevelopment", label: "Training and Development" },
  { value: "CorporateCommunications", label: "Corporate Communications" },
  { value: "BusinessDevelopment", label: "Business Development" },
  { value: "Innovation", label: "Innovation" },
  { value: "Merchandising", label: "Merchandising" },
  { value: "StrategicPartnerships", label: "Strategic Partnerships" },
  { value: "CustomerSuccess", label: "Customer Success" },
  { value: "LegalCompliance", label: "Legal Compliance" },
  { value: "InformationSecurity", label: "Information Security" },
  { value: "CorporateStrategy", label: "Corporate Strategy" },
  { value: "FinanceAndAccounting", label: "Finance and Accounting" },
  { value: "TalentAcquisition", label: "Talent Acquisition" },
  { value: "BusinessAnalysis", label: "Business Analysis" },
  { value: "CorporateDevelopment", label: "Corporate Development" },
  { value: "DataAnalytics", label: "Data Analytics" },
  { value: "CustomerAnalytics", label: "Customer Analytics" },
];

const Form = (): JSX.Element => {
  const [input, setInput] = useState({
    email: "",
    type: "select",
    category: null as Category | null,
  });

  const isDisabled = !input.email || input.type === "select" || !input.category;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategoryChange = (selectedOption: Category | null) => {
    setInput({
      ...input,
      category: selectedOption,
    });
  };

  const customStyles = {
    control: (provided: React.CSSProperties) => ({
      ...provided,
      backgroundColor: "#e7e4e4",
      fontSize: "0.8rem",
    }),
    placeholder: (provided: React.CSSProperties) => ({
      ...provided,
      color: "#000",
    }),
  };

  return (
    <>
      <FormStyled>
        <div className="logo">
          <img
            src="/esed.png"
            alt="logo"
            width="200"
            height="80"
            className="logo"
          />
        </div>
        <label>Your Email Address *</label>
        <input
          type="email"
          name="email"
          id="userEmail"
          value={input.email}
          onChange={handleInputChange}
        />
        <label>Type *</label>
        <p>Would you like to give us Feedback, Question, or Complain?</p>
        <select
          name="type"
          id="feedback"
          value={input.type}
          onChange={handleInputChange}
        >
          <option value="select">Choose the answer</option>
          <option value="Feedback">Feedback</option>
          <option value="Question">Question</option>
          <option value="Complain">Complain</option>
        </select>
        <label>Category *</label>
        <p>To which department would you like to send the form?</p>
        <Select
          options={categories}
          className="categories"
          placeholder="Choose the answer"
          value={input.category}
          onChange={handleCategoryChange}
          styles={customStyles}
        />
        <div className="button-container">
          <Button text="Next" isDisabled={isDisabled} />
        </div>
      </FormStyled>
    </>
  );
};

export default Form;
