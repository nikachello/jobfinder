"use client";
import Logo from "@/components/general/Logo";
import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import CompanyForm from "./CompanyForm";
import { UserSelectionType } from "@/app/utils/types";
import UserTypeSelection from "./UserTypeForm";
import { ArrowLeft } from "lucide-react";
import JobSeekerForm from "./JobSeekerForm";

type Props = {};

const OnboardingForm = (props: Props) => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserSelectionType>(null);

  const handleUserTypeSelection = (type: UserSelectionType) => {
    setUserType(type);
    setStep(2);
  };

  const handleBack = () => {
    setUserType(null);
    setStep(1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <UserTypeSelection onSelect={handleUserTypeSelection} />;
      case 2:
        return userType === "company" ? <CompanyForm /> : <JobSeekerForm />;
      default:
        null;
    }
  };

  return (
    <>
      <div className="relative flex items-center justify-between max-w-lg w-full">
        <ArrowLeft
          className={`cursor-pointer absolute left-0 ${
            step === 1 ? "hidden" : "block"
          }`}
          onClick={handleBack}
        />
        <Logo classname="mx-auto" />
      </div>
      <Card className="max-w-lg w-full">
        <CardContent className="p-6">{renderStep()}</CardContent>
      </Card>
    </>
  );
};

export default OnboardingForm;
