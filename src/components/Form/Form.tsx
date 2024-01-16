import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  return (
    <>
      <FormStyled>
        <label>Your Email Address *</label>
        <input type="email" name="email" id="userEmail" />
        <label>Type *</label>
        <p>Would you like to give us Feedback, Question or Complain?</p>
        <select name="type" id="feedback">
          <option value="select">Choose the answer</option>
          <option value="Feedback">Feedback</option>
          <option value="Question">Question</option>
          <option value="Complain">Complain</option>
        </select>
        <label>Category *</label>
        <p>To which department would you like to send the form?</p>
        <select name="category" id="categories">
          <option value="select">Choose the answer</option>
          <option value="HumanResources">Human Resources</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="CustomerService">Customer Service</option>
          <option value="IT">Information Technology</option>
          <option value="Operations">Operations</option>
          <option value="Legal">Legal</option>
          <option value="Administration">Administration</option>
          <option value="ResearchAndDevelopment">
            Research and Development
          </option>
          <option value="QualityControl">Quality Control</option>
          <option value="SupplyChain">Supply Chain</option>
          <option value="PublicRelations">Public Relations</option>
          <option value="Facilities">Facilities</option>
          <option value="Training">Training</option>
          <option value="HealthAndSafety">Health and Safety</option>
          <option value="ProductManagement">Product Management</option>
          <option value="Engineering">Engineering</option>
          <option value="Design">Design</option>
          <option value="Communication">Communication</option>
          <option value="StrategicPlanning">Strategic Planning</option>
          <option value="ProjectManagement">Project Management</option>
          <option value="EnvironmentalSustainability">
            Environmental Sustainability
          </option>
          <option value="CorporateSocialResponsibility">
            Corporate Social Responsibility
          </option>
          <option value="InternalAudit">Internal Audit</option>
          <option value="Logistics">Logistics</option>
          <option value="InternationalBusiness">International Business</option>
          <option value="GovernmentRelations">Government Relations</option>
          <option value="CustomerExperience">Customer Experience</option>
          <option value="EmployeeRelations">Employee Relations</option>
          <option value="DiversityAndInclusion">Diversity and Inclusion</option>
          <option value="EthicsAndCompliance">Ethics and Compliance</option>
          <option value="TrainingAndDevelopment">
            Training and Development
          </option>
          <option value="CorporateCommunications">
            Corporate Communications
          </option>
          <option value="BusinessDevelopment">Business Development</option>
          <option value="Innovation">Innovation</option>
          <option value="Merchandising">Merchandising</option>
          <option value="StrategicPartnerships">Strategic Partnerships</option>
          <option value="CustomerSuccess">Customer Success</option>
          <option value="LegalCompliance">Legal Compliance</option>
          <option value="InformationSecurity">Information Security</option>
          <option value="CorporateStrategy">Corporate Strategy</option>
          <option value="FinanceAndAccounting">Finance and Accounting</option>
          <option value="TalentAcquisition">Talent Acquisition</option>
          <option value="BusinessAnalysis">Business Analysis</option>
          <option value="CorporateDevelopment">Corporate Development</option>
          <option value="DataAnalytics">Data Analytics</option>
          <option value="CustomerAnalytics">Customer Analytics</option>
        </select>
        <div className="button-container">
          <Button text="Next" />
        </div>
      </FormStyled>
    </>
  );
};

export default Form;
