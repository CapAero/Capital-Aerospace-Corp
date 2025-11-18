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
      <h1 class="hero-heading mb-1">OUR TEAM</h1>

      <h2
        class="styled-font mb-5 text-uppercase"
        style="font-size: 1.8rem"
      >
        Profiles and photos are on the way
      </h2>

      <v-row class="text-left">
        <StaffCard
          title="Kevin Beamish"
          subtitle="President/PRM"
          icon="/images/staff/KevinBeamish.jpg"
        >
          Kevin is the central coordinator at Capital Aerospace Corp, serving as the key link
          between our maintenance team and flight operations. He manages our product execution,
          logistics, maintenance planning, employee experience, and vendor relations to ensure every
          helicopter is ready and every part is in place. Kevin leads all quality assurance efforts,
          maintaining the safety and precision of our maintenance practices. He also oversees the
          development and implementation of new technologies, working closely with our lead
          engineers and operational partners to support future growth.
        </StaffCard>

        <StaffCard
          title="Trevor Strockinski"
          subtitle="Team Lead & AME"
          icon="/images/staff/Trevor.jpg"
        >
          Trevor is Capital Aerospace Corp's lead engineer, overseeing the daily workflow of our
          maintenance team and ensuring smooth project management. Working closely with Kevin, he
          handles maintenance planning, mentorship programs, and the hands on field support that
          keeps your helicopters airworthy. He works directly with pilots, ensuring we understand
          each aircraft's unique needs and the pilot's experience is maintained to the highest
          standards.
        </StaffCard>

        <StaffCard
          title="Kyle Landry"
          subtitle="Technology and Innovation Lead & AME"
          icon="/images/staff/KyleLandry.jpg"
        >
          Kyle is our go to expert for blending hands on aircraft maintenance with cutting edge
          technological innovation. As an experienced AME, he handles field maintenance while
          driving forward our innovative approaches to technology. Kyle's mission is to move us
          beyond old maintenance methods into a more efficient, future focused era. In the hangar
          and beyond, Kyle ensures our technology and maintenance practices stay at the forefront of
          the industry.
        </StaffCard>
        <StaffCard
          title="Jay Chow"
          subtitle="Technical Records and Stores Manager"
          icon="/images/staff/JayChow.jpg"
        >
          Jay where's two hats here at Capital Aerospace. He is our Stores/Inventory Manager and our
          Technical Records lead. On the inventory side, Jay manages the shipping and receiving,
          coordinates with vendors, manages inventory accuracy, and completes the purchase order
          workflow stack. As the Technical Records lead, Jay audits and transcribes all completed
          work orders into each aircraft's component historical documentation, catalogues all
          relevant data regarding Transport Canada compliance requirements, audits the active
          journey logbooks ensuring we meet the highest standards of scrutiny.
        </StaffCard>
        <StaffCard
          title="Mark Cunningham"
          subtitle="AME"
          icon="/images/staff/mark.png"
        >
          Mark is our most experienced AME, with a depth of expertise that sets the standard for our
          team. He has a strong background in northern operations and has previously held roles in
          PRM and Quality Assurance. Mark can jump in and support our team across the entire AMO
          with technical and administrative guidance. Mark's expertise in operational situations and
          troubleshooting help set us apart, especially when it comes to the AS350 series. Mark is a
          trusted mentor to our younger team members, particularly in managing large annual tasks
          and projects.
        </StaffCard>
        <StaffCard
          title="Owen Davis"
          subtitle="AME"
          icon="/images/staff/OwenDavis.jpg"
        >
          Owen is one of our highly skilled AMEs, bringing a calm maturity and strong mechanical
          mindset to the team. He thrives in challenging situations and is always the first to offer
          a helping hand. Owen spends the summer months chasing helicopters across the countryside
          and the winter months prepping aircraft for seasonal operations. He's particularly adept
          at FADEC troubleshooting, track and balance, and ensuring peak performance of the Bell 407
          fleet.
        </StaffCard>
        <StaffCard
          title="Damon Juss"
          subtitle="AME & Turbine Specialist"
          icon="/images/staff/damon.png"
        >
          Damon brings a rare blend of expertise as both a pilot and an AME. He uses his firsthand
          flying experience to inform his engineering work, offering practical, real-time insights
          into aircraft fitness. In the summer, he balances flight duties with hands on maintenance,
          while in the winter, he focuses on annual maintenance targets in the hangar. Damon also co
          leads our LTS-101 1800 hour inspection program alongside Jesse, contributing his unique
          aviation expertise and engineering curiosity to our growing maintenance facility.
        </StaffCard>
        <StaffCard
          title="Jesse Kirby"
          subtitle="Apprentice & Turbine Specialist"
          icon="/images/staff/JesseKirby.jpg"
        >
          Jesse is a seasoned maintenance specialist with over two decades of experience in utility
          helicopter operations. He travels across Northwestern Canada, working day and night to
          ensure our aircraft meet the highest maintenance standards. Known for his meticulous
          attention to detail, Jesse handles daily airworthiness and annual maintenance for our
          fleet. He also co-leads the LTS-101 1800 hour inspection program with Damon, applying his
          deep component overhaul knowledge to advance our turbine maintenance capabilities.
        </StaffCard>
        <StaffCard
          title="Erik Polzin"
          subtitle="AME"
          icon="/images/staff/ComingSoon.png"
        >
          More coming soon
        </StaffCard>
        <StaffCard
          title="Ryan Purcell"
          subtitle="Apprentice"
          icon="/images/staff/RyanPurcell.jpg"
        >
          Ryan is one of our dedicated AME Apprentices, currently honing his skills under the
          guidance of our experienced team. He's self-motivated and eager to learn from the
          engineers around him, always striving to improve and grow within Capital Aerospace.
          Throughout the summer, he travels across northwestern Canada alongside our team,
          participating in scheduled inspections and assisting with operational tasks. Ryan is a
          valuable member of our team today and a key part of our AME development program, growing
          into the future talent who will shape Capital Aerospace in the years ahead.
        </StaffCard>
        <StaffCard
          title="Andrew Sinding"
          subtitle="Apprentice"
          icon="/images/staff/AndrewSinding.jpg"
        >
          Andrew is our newest AME Apprentice team members here at Capital Aerospace. Andrew joined
          us highly motivated, holding a commercial helicopter pilot's license and aspiring to
          pursue two careers in aviation. His goal is to become a dual-role pilot and AME, and he's
          enthusiastic about learning the ropes from our unique mentors. While he's near the
          beginning of his journey, Andrew already fits in well with the team and is eager to spend
          as much time as possible around the helicopters in any operational scenario.
        </StaffCard>
      </v-row>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"

import StaffCard from "@/components/team/StaffCard.vue"
import hero2Image from "/images/team-bg.jpg"

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
