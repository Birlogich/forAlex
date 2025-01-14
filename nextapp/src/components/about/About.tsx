"use client";

import Image from "next/image";
import "@/app/globals.css";
import styles from "@/styles/about/about.module.scss";
import btn from "@/styles/button.module.scss";
import Link from "next/link";

const About = () => {
  return (
    <section className={`${styles.about} container`}>
      <div className="subtitleblock">
        <h2 className="subtitle">About us</h2>
        <p>
          Welcome to Stukd! We’re more than just a platform; we’re a community
          of creative minds, problem solvers, and dreamers. Here’s a glimpse
          into who we are:
        </p>
      </div>
      <div className={styles.aboutContainer}>
        <div className={`${styles.gridel} ${styles.whoweare}`}>
          <div>
            <span>
              <Image
                src="assets/images/aboutpage/people.svg"
                alt="who we are"
                width={32}
                height={32}
              />
            </span>
            <span>Who we are?</span>
          </div>
          <p>
            At Strukd, we are dedicated to improving data accessibility. Founded
            in 2022 by a team of innovators, we transform unstructured data from
            online publications and industry-specific sources into valuable
            insights through artificial intelligence. Our mission is to make
            diverse data easily accessible and usable for businesses, tailored
            to their specific needs.
          </p>
        </div>
        <div className={`${styles.gridel} ${styles.whatwedo}`}>
          <div>
            <span>
              <Image
                src="assets/images/aboutpage/lamp.svg"
                alt="who we do"
                width={32}
                height={32}
              />
            </span>
            <span>What we do?</span>
          </div>
          <p>
            Our platform leverages machine learning, natural language
            processing, and computer vision to efficiently navigate the web and
            extract relevant data. We specialize in monitoring changes in data
            sources to provide our customers with consistent, uninterrupted
            access to the information they need.
          </p>
        </div>
        <div className={`${styles.gridel} ${styles.lamp1}`}>
          <Image
            src="assets/images/aboutpage/lamp1.svg"
            alt="image"
            width={360}
            height={456}
          />
        </div>

        <div className={`${styles.gridel} ${styles.values}`}>
          <div>
            <span>
              <Image
                src="assets/images/aboutpage/diamond.svg"
                alt="our values"
                width={32}
                height={32}
              />
            </span>
            <span>Our Values</span>
          </div>
          <div>
            <p>Innovation</p>
            <p>
              We believe in always finding better ways to do things. Our team
              works hard to improve and push limits.
            </p>
            <p>Customer Focus</p>
            <p>
              We listen to our clients and make sure our work really helps them
              meet their needs.
            </p>
            <p>Integrity</p>
            <p>
              We build trust with our customers by being honest and transparent
              in all our interactions.
            </p>
            <p>Collaboration</p>
            <p>
              We work as a team, sharing ideas to create the best solutions.
            </p>
          </div>
          <Link
            className={`${btn.btn}`}
            style={{ width: "300px" }}
            href={{
              pathname: "/contact",
            }}
            onClick={() => console.log("123")}
          >
            Contact us
          </Link>
        </div>
        <div className={`${styles.gridel} ${styles.vision}`}>
          <div>
            <span>
              <Image
                src="assets/images/aboutpage/vision.svg"
                alt="our vision"
                width={32}
                height={32}
              />
            </span>
            <span>Our vision</span>
          </div>
          <p>
            Our vision is to make advanced data capabilities accessible to all
            companies, enabling them to harness information with ease and
            innovate. <br />
            <br />
            We simplify data management, allowing clients to focus on developing
            new products and services that redefine their industries. We are
            committed to advancing our technology to meet the evolving demands
            of the marketplace.
          </p>
        </div>
        <div className={`${styles.gridel} ${styles.lamp2}`}>
          <Image
            src="assets/images/aboutpage/lamp2.svg"
            width={552}
            height={260}
            alt="image"
            className={styles.lamp2}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
