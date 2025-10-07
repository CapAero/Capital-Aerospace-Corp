<template>
  <section
    class="section1"
    :style="{ height: section1Height }"
  >
    <v-img
      :src="hero1Image"
      class="fill-height"
      cover
      style="opacity: 0.3"
    />
    <div
      class="pa-8 text-white content1 text-left"
      style="position: absolute; top: 120px; width: 100%"
    >
      <h2 class="hero-heading mb-1">OUR MISSION</h2>

      <h1
        class="styled-font mb-5"
        style="font-size: 1.8rem"
      >
        "We empower helicopter operators by eliminating maintenance constraints and leveraging
        technology to provide dependable solutions that maximize operational freedom"
      </h1>

      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-card
            class="mb-5 text-white border-card text-center"
            color="#ffffff22"
          >
            <v-card-title>About Us</v-card-title>
            <v-card-text>
              <hr class="mb-4" />

              <h2
                class="styled-font"
                style="font-size: 1.2rem"
              >
                We are a full service AMO that plugs directly into your operation. Our team manages
                every aspect of helicopter maintenance and business development, including; AOG
                support, field and heavy maintenance, maintenance planning and forecasting, parts
                ordering, pilot training, TC compliance, administrative burdens and fleet expansion
                support. Quality is our core principle and we uphold your brand down to every
                detail.
              </h2>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-carousel
            crossfade
            transition-duration="1600"
            :height="carousel1Height"
            style="cursor: pointer"
          >
            <v-carousel-item
              src="/images/mission/about-1.jpg"
              cover
              @click="showImage('/images/mission/about-1.jpg')"
            ></v-carousel-item>

            <v-carousel-item
              src="/images/mission/about-2.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="/images/mission/about-3.jpg"
              cover
            ></v-carousel-item>
          </v-carousel>

          <v-row class="d-none">
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-card>
                <v-img
                  src="/images/mission/about-1.jpg"
                  @click="showImage('/images/mission/about-1.jpg')"
                />
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-card>
                <v-img
                  src="/images/mission/about-3.jpg"
                  @click="showImage('/images/mission/about-3.jpg')"
                />
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-card>
                <v-img
                  src="/images/mission/about-2.jpg"
                  @click="showImage('/images/mission/about-2.jpg')"
                />
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </section>

  <section
    class="section2"
    :style="{ height: section2Height }"
  >
    <v-img
      :src="hero2Image"
      class="fill-height"
      cover
      style="opacity: 0.3; min-height: 100vh"
    />

    <div
      class="pa-8 text-white content2 text-right"
      style="position: absolute; top: 20px; width: 100%"
    >
      <h2 class="hero-heading mb-10">PEOPLE BEHIND OUR MISSION</h2>

      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-carousel
            crossfade
            transition-duration="1600"
            :height="carousel1Height"
            style="cursor: pointer"
          >
            <v-carousel-item
              src="/images/mission/people-1.jpg"
              cover
              @click="showImage('/images/mission/about-1.jpg')"
            ></v-carousel-item>

            <v-carousel-item
              src="/images/mission/people-2.jpg"
              cover
            ></v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <h1
            class="styled-font mb-5"
            style="font-size: 1.8rem"
          >
            Capital Aerospace was founded to create a healthy, people first focused work environment
            in aviation. We believe our culture drives success, and we safeguard that ethos with
            great care
          </h1>
        </v-col>
      </v-row>
    </div>
  </section>

  <section
    class="section3"
    :style="{ height: section3Height }"
  >
    <v-img
      :src="hero3Image"
      class="fill-height"
      cover
      style="opacity: 0.3; min-height: 100vh"
    />

    <div
      class="pa-8 text-white content3 text-left"
      style="position: absolute; top: 20px; width: 100%"
    >
      <h2 class="hero-heading mb-10">OUR SPECIALIZATION</h2>

      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-card
            class="mb-5 text-white border-card text-left"
            color="#ffffff22"
          >
            <v-card-text>
              <ul
                class="pl-2 styled-font"
                style="font-size: 1.5rem"
              >
                <li>
                  <v-avatar
                    color="#fff"
                    size="60"
                  >
                    <img
                      src="/images/icons/bell.png"
                      alt="Bell"
                      style="width: 52px; margin-bottom: -3px"
                    />
                  </v-avatar>
                  BELL 407
                </li>
                <li>
                  <v-avatar
                    color="#fff"
                    size="60"
                  >
                    <img
                      src="/images/icons/bell.png"
                      alt="Bell"
                      style="width: 52px; margin-bottom: -3px"
                    />
                  </v-avatar>
                  BELL 206 SERIES
                </li>
                <li>
                  <v-avatar
                    color="#fff"
                    size="60"
                  >
                    <img
                      src="/images/icons/rolls.png"
                      alt="Rolls-Royce"
                      style="width: 60px; margin-bottom: -3px"
                    />
                  </v-avatar>
                  ROLLS ROYCE SERIES 2 & 4
                </li>
                <li>
                  <v-avatar
                    color="#fff"
                    size="60"
                  >
                    <img
                      src="/images/icons/airbus.png"
                      alt="Airbus"
                      style="width: 60px; margin-bottom: -3px"
                    />
                  </v-avatar>
                  AIRBUS AS350 SERIES
                </li>
                <li>
                  <v-avatar
                    color="#fff"
                    size="60"
                  >
                    <img
                      src="/images/icons/honeywell.png"
                      alt="Honeywell LTS-101"
                      style="width: 60px; margin-bottom: -3px"
                    />
                  </v-avatar>
                  LTS-101 SERIES
                </li>
                <li>
                  <v-avatar
                    color="#fff"
                    size="60"
                  >
                    <img
                      src="/images/icons/safran.png"
                      alt="Safran Arriel 2"
                      style="width: 56px; margin-bottom: 0px"
                    />
                  </v-avatar>
                  SAFRAN ARRIEL 2
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col>
          <v-carousel
            crossfade
            transition-duration="1600"
            :height="carousel1Height"
            style="cursor: pointer"
          >
            <v-carousel-item
              src="/images/mission/specialization-1.jpg"
              cover
              @click="showImage('/images/mission/specialization-1.jpg')"
            ></v-carousel-item>

            <v-carousel-item
              src="/images/mission/specialization-2.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="/images/mission/specialization-3.jpg"
              cover
            ></v-carousel-item>

            <v-carousel-item
              src="/images/mission/specialization-4.jpg"
              cover
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </div>
  </section>

  <section
    class="section4"
    :style="{ height: section4Height }"
  >
    <v-img
      :src="hero4Image"
      class="fill-height"
      cover
      style="opacity: 0.3; min-height: 100vh"
    />

    <div
      class="pa-8 text-white content4 text-right"
      style="position: absolute; top: 20px; width: 100%"
    >
      <v-row>
        <v-col
          cols="12"
          md="10"
          offset-md="1"
        >
          <h2 class="hero-heading mb-10">WHAT WE TAKE CARE OF</h2>
          <v-row class="text-left">
            <OfferingItem
              title="AOG & General Maintenance"
              icon="/images/icons/maintenance.png"
            >
              Our AOG support is predicated on uncompromising operational success and minimizing
              downtime. We a have dedicated AOG direct number that is monitored 24/7 by our
              experienced maintenance staff. We deliver full-spectrum helicopter maintenance
              wherever your aircraft is located; field maintenance, annual inspections, advanced
              troubleshooting of nuisance issues (progressive track & balance), STC installations
              and specific operator requests.
            </OfferingItem>

            <OfferingItem
              title="Maintenance Planning and Logistics"
              icon="/images/icons/planning.png"
            >
              Our Maintenance Planning and Logistics services ensure precise coordination between
              the maintenance and operations departments. Your operation will have a dedicated
              Capital Aerospace staff member whose primary focus is supporting your operational
              needs. This structure allows us to adapt seamlessly to real time changes and evolving
              operational demands.
            </OfferingItem>

            <OfferingItem
              title="Inventory Control"
              icon="/images/icons/parts.png"
            >
              Our Inventory Control program provides accurate tracking and management of your
              aircraft parts, following the same proven model used by established in-house AMOs. We
              will maintain or help you build a reliable base inventory, manage ordering and
              forecasting, oversee shipping and receiving, conduct audits, and provide financial
              analysis. By leveraging our supplier relationships and discounts, we ensure you
              receive the best pricing available while maintaining the highest standards of
              accountability and efficiency.
            </OfferingItem>
            <OfferingItem
              title="Operations Staff Training"
              icon="/images/icons/training.png"
            >
              Our Operations Staff Training program provides structured annual and progressive
              training to strengthen coordination between operations and maintenance departments.
              Each program is customized to your fleet type and operational procedures, ensuring
              pilots and administrative personnel gain a clear understanding of maintenance
              requirements and compliance standards. Training includes onboarding and practical
              application of our custom-built maintenance tracking technology, enabling staff to
              accurately manage records, monitor aircraft status, and respond effectively to
              operational changes.
            </OfferingItem>
            <OfferingItem
              title="Regulatory Compliance"
              icon="/images/icons/compliance.png"
            >
              We can either support or assume full responsibility for the PRMC duties associated
              with your AOC. Your Maintenance Control Manual will be reviewed, maintained, and kept
              current to regulatory standards. Our team can act as a guiding resource during
              internal and external audits, or manage all aspects of maintenance control and
              technical dispatch on your behalf. Our goal is to carry as much of the Transport
              Canada compliance burden as possible, allowing you to focus on safe and efficient
              operations.
            </OfferingItem>
            <OfferingItem
              title="Admin & Technical Records"
              icon="/images/icons/admin.png"
            >
              This service provides the option of building or replacing the Documents Incorporated
              for Reference manual to ensure it aligns with current regulatory and operational
              requirements. We manage CHRs and technical records for every aircraft in your fleet,
              updating all records with accuracy and consistency. Our team also oversees the
              precision and effectiveness of aircraft journey logbooks, working directly with your
              pilots to maintain accuracy and ensure full regulatory compliance.
            </OfferingItem>
            <OfferingItem
              title="Bridging and Helicopter Purchasing"
              icon="/images/icons/bridge.png"
            >
              This is a comprehensive service designed to help you reliably accept new aircraft into
              your fleet or operation. We communicate directly with aircraft owners and leasing
              companies to verify aircraft condition, fitness, and conformity with your brand and
              operational standards. Our team provides guidance and financial analysis throughout
              the purchasing process, while managing the detailed tasks of initial inspections,
              including aircraft assessments and independent appraisals.
            </OfferingItem>
            <OfferingItem
              title="Fleet Expansion Support and Business Development"
              icon="/images/icons/expansion.png"
            >
              We work directly with your management staff to determine the most suitable aircraft
              for both current operations and future fleet growth. By analyzing the maintenance
              constraints and advantages of specific aircraft types, we provide clear guidance for
              long-term planning. This can include preparing for infrastructure expansion and
              supporting regional growth strategies. With our expertise, aircraft maintenance is no
              longer a limiting factor, allowing your organization to focus fully on achieving its
              goals.
            </OfferingItem>
            <OfferingItem
              title="Health & Safety Program"
              icon="/images/icons/safety.png"
            >
              Our Health and Safety Program is designed to integrate seamlessly with your operation,
              ensuring full compliance with regulatory requirements while fostering a proactive
              safety culture. We support client obligations and can scale a company-wide safety
              program to meet your specific needs, enabling you to concentrate on flight operations
              and safety.
            </OfferingItem>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </section>

  <section
    class="section5"
    :style="{ height: section5Height }"
  >
    <div
      class="pa-8 text-white content5 text-center"
      style="position: absolute; top: 120px; width: 100%"
    >
      <v-row>
        <v-col
          cols="12"
          md="8"
          offset-md="2"
        >
          <div
            class="bg-black pa-8 pb-3"
            style="
              border: 2px #cda850 solid;
              border-radius: 8px;
              background: linear-gradient(to bottom right, #cda85055, #000);
              box-shadow: 0 0 85px #cda850;
            "
          >
            <h2 class="hero-heading mb-1">GROWTH IS IN MOTION</h2>

            <h1
              class="styled-font mb-5"
              style="font-size: 1.8rem"
            >
              We're expanding to bring more capability, more coverage, and more support.
            </h1>

            <div
              class="mb-6"
              style="border-top: 3px solid #fff; border-radius: 4px"
            ></div>
            <div class="mb-3">Honeywell LTS-101 series 1800 Hour Inspection</div>
            <v-divider class="my-3" />
            <div class="mb-3">
              Airbus AS350 12 Year Inspection Completion; Including Full Airframe Painting Facility
            </div>
            <v-divider class="my-3" />
            <div class="mb-3">Custom Built For Helicopter Operators Digital Logbook Service</div>
            <v-divider class="my-3" />
            <div class="mb-3">Custom Built Company Specific Software Applications</div>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>

  <v-dialog
    v-model="dialog"
    width="auto"
  >
    <v-card class="border-card">
      <v-img
        :src="imageUrl"
        style="width: 600px"
      />
      <v-btn
        icon="mdi-close"
        style="float: left; position: absolute; top: 10px; right: 10px"
        @click="dialog = false"
      ></v-btn>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import hero1Image from "/images/mission-1.jpg"
import hero2Image from "/images/mission-2.jpg"
import hero3Image from "/images/mission-3.jpg"
import hero4Image from "/images/mission-4.jpg"
import OfferingItem from "@/components/mission/OfferingItem.vue"
import { onMounted, ref } from "vue"

import { useDisplay } from "vuetify/lib/composables/display"
const { smAndDown } = useDisplay()

const section1Height = ref("100vh")
const carousel1Height = ref("400px")

const section2Height = ref("600px")
const section3Height = ref("600px")
const section4Height = ref("600px")
const section5Height = ref("600px")

const dialog = ref(false)
const imageUrl = ref("")

function showImage(imagePath: string) {
  imageUrl.value = imagePath

  dialog.value = true
}

function updateContentHeight() {
  const content1 = document.querySelector(".content1")
  const content2 = document.querySelector(".content2")
  const content3 = document.querySelector(".content3")
  const content4 = document.querySelector(".content4")
  const content5 = document.querySelector(".content5")

  const section1 = document.querySelector(".section1")
  const section2 = document.querySelector(".section2")
  const section3 = document.querySelector(".section3")
  const section4 = document.querySelector(".section4")
  const section5 = document.querySelector(".section5")

  if (content1 && section1) {
    const contentHeight = content1.clientHeight
    if (smAndDown.value) {
      section1Height.value = `${contentHeight + 250}px`
      carousel1Height.value = "500px"
    } else {
      section1Height.value = "100vh"
      carousel1Height.value = "calc(100vh - 400px)"
    }
  }

  if (content2 && section2) {
    const contentHeight = content2.clientHeight
    section2Height.value = `${contentHeight + 100}px`
  }

  if (content3 && section3) {
    const contentHeight = content3.clientHeight
    section3Height.value = `${contentHeight + 100}px`
  }

  if (content4 && section4) {
    const contentHeight = content4.clientHeight
    section4Height.value = `${contentHeight + 100}px`

    if (smAndDown.value) {
      section4Height.value = `${contentHeight + 250}px`
    } else {
      section4Height.value = "100vh"
    }
  }

  if (content5 && section5) {
    const contentHeight = content5.clientHeight
    section5Height.value = `${contentHeight + 100}px`
  }
}

onMounted(() => {
  updateContentHeight()
})

window.addEventListener("resize", updateContentHeight)
</script>

<style scoped>
section {
  /* Ensure the section takes at least the full viewport height */
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
