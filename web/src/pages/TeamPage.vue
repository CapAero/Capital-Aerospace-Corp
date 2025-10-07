<template>
  <section
    class="section1"
    :style="{ height: section1Height }"
  >
    <v-img
      :src="hero2Image"
      class="fill-height"
      cover
      style="opacity: 0.3"
    />

    <div
      class="pa-8 text-white content1 text-left"
      style="position: absolute; top: 120px; width: 100%"
    >
      <h2 class="hero-heading mb-1">OUR TEAM</h2>

      <h1
        class="styled-font mb-5"
        style="font-size: 1.8rem"
      >
        Profiles and photos are on the way
      </h1>

      <v-row class="text-left">
        <StaffCard
          title="Kevin Beamish"
          subtitle="President/PRM"
          icon="/images/staff/stock.png"
        >
          Kevin has over 25 years of experience in the aviation industry, including 15 years in
          management roles. He has held positions such as Director of Maintenance and Director of
          Operations at various Canadian charter operators. Kevin is a licensed Aircraft Maintenance
          Engineer (AME) with a specialty in avionics and holds a Bachelor of Commerce degree from
          the University of Calgary. He is also a Transport Canada Designated Person for Continuing
          Airworthiness Management Organizations (CAMO) and has served as a member of the Canadian
          Business Aviation Association (CBAA) Safety Committee.
        </StaffCard>

        <StaffCard
          title="Trevor Strockinski"
          subtitle="Team Lead & AME"
          icon="/images/staff/stock.png"
        >
          Our Maintenance Planning and Logistics services ensure precise coordination between the
          maintenance and operations departments. Your operation will have a dedicated Capital
          Aerospace staff member whose primary focus is supporting your operational needs. This
          structure allows us to adapt seamlessly to real time changes and evolving operational
          demands.
        </StaffCard>

        <StaffCard
          title="Kyle Landry"
          subtitle="Technology and Innovation Lead & AME"
          icon="/images/staff/stock.png"
        >
          Our Inventory Control program provides accurate tracking and management of your aircraft
          parts, following the same proven model used by established in-house AMOs. We will maintain
          or help you build a reliable base inventory, manage ordering and forecasting, oversee
          shipping and receiving, conduct audits, and provide financial analysis. By leveraging our
          supplier relationships and discounts, we ensure you receive the best pricing available
          while maintaining the highest standards of accountability and efficiency.
        </StaffCard>
        <StaffCard
          title="Jay Chow"
          subtitle="Technical Records and Stores Manager"
          icon="/images/staff/stock.png"
        >
          Our Operations Staff Training program provides structured annual and progressive training
          to strengthen coordination between operations and maintenance departments. Each program is
          customized to your fleet type and operational procedures, ensuring pilots and
          administrative personnel gain a clear understanding of maintenance requirements and
          compliance standards. Training includes onboarding and practical application of our
          custom-built maintenance tracking technology, enabling staff to accurately manage records,
          monitor aircraft status, and respond effectively to operational changes.
        </StaffCard>
        <StaffCard
          title="Mark Cunningham"
          subtitle="AME"
          icon="/images/staff/stock.png"
        >
          We can either support or assume full responsibility for the PRMC duties associated with
          your AOC. Your Maintenance Control Manual will be reviewed, maintained, and kept current
          to regulatory standards. Our team can act as a guiding resource during internal and
          external audits, or manage all aspects of maintenance control and technical dispatch on
          your behalf. Our goal is to carry as much of the Transport Canada compliance burden as
          possible, allowing you to focus on safe and efficient operations.
        </StaffCard>
        <StaffCard
          title="Owen Davis"
          subtitle="AME"
          icon="/images/staff/stock.png"
        >
          This service provides the option of building or replacing the Documents Incorporated for
          Reference manual to ensure it aligns with current regulatory and operational requirements.
          We manage CHRs and technical records for every aircraft in your fleet, updating all
          records with accuracy and consistency. Our team also oversees the precision and
          effectiveness of aircraft journey logbooks, working directly with your pilots to maintain
          accuracy and ensure full regulatory compliance.
        </StaffCard>
        <StaffCard
          title="Damon Juss"
          subtitle="AME & Turbine Specialist"
          icon="/images/staff/stock.png"
        >
          This is a comprehensive service designed to help you reliably accept new aircraft into
          your fleet or operation. We communicate directly with aircraft owners and leasing
          companies to verify aircraft condition, fitness, and conformity with your brand and
          operational standards. Our team provides guidance and financial analysis throughout the
          purchasing process, while managing the detailed tasks of initial inspections, including
          aircraft assessments and independent appraisals.
        </StaffCard>
        <StaffCard
          title="Jesse Kirby"
          subtitle="Apprentice & Turbine Specialist"
          icon="/images/staff/stock.png"
        >
          We work directly with your management staff to determine the most suitable aircraft for
          both current operations and future fleet growth. By analyzing the maintenance constraints
          and advantages of specific aircraft types, we provide clear guidance for long-term
          planning. This can include preparing for infrastructure expansion and supporting regional
          growth strategies. With our expertise, aircraft maintenance is no longer a limiting
          factor, allowing your organization to focus fully on achieving its goals.
        </StaffCard>
        <StaffCard
          title="Ryan Purcell"
          subtitle="Apprentice"
          icon="/images/staff/stock.png"
        >
          Our Health and Safety Program is designed to integrate seamlessly with your operation,
          ensuring full compliance with regulatory requirements while fostering a proactive safety
          culture. We support client obligations and can scale a company-wide safety program to meet
          your specific needs, enabling you to concentrate on flight operations and safety.
        </StaffCard>
        <StaffCard
          title="Andrew Sinding"
          subtitle="Apprentice"
          icon="/images/staff/stock.png"
        >
          Our Health and Safety Program is designed to integrate seamlessly with your operation,
          ensuring full compliance with regulatory requirements while fostering a proactive safety
          culture. We support client obligations and can scale a company-wide safety program to meet
          your specific needs, enabling you to concentrate on flight operations and safety.
        </StaffCard>
      </v-row>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"

import StaffCard from "@/components/team/StaffCard.vue"
import hero2Image from "@/assets/images/hero-05.jpg"

const section1Height = ref("1500px")

function updateContentHeight() {
  const content1 = document.querySelector(".content1")
  const section1 = document.querySelector(".section1")

  if (content1 && section1) {
    const contentHeight = content1.clientHeight
    section1Height.value = `${contentHeight + 120}px`
  }
}

onMounted(() => {
  updateContentHeight()
})

window.addEventListener("resize", updateContentHeight)
</script>
