import { prisma } from "@/app/utils/db";
import React from "react";

const getData = async () => {
  const data = await prisma.jobPost.findMany({
    where: {
      status: "ACTIVE",
    },
    select: {
      jobTitle: true,
      id: true,
      salaryFrom: true,
      salaryTo: true,
      employmentType: true,
      location: true,
      createdAt: true,
      Company: {
        select: {
          name: true,
          logo: true,
          location: true,
          about: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log(data);

  return data;
};

const JobListings = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col gap-6">
      {data.map((job) => (
        <p key={job.id}>{job.jobTitle}</p>
      ))}
    </div>
  );
};

export default JobListings;
