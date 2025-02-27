"use client";

import React, { useEffect } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from './TermsAndConditions.module.css';

export default function TermsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  const handleAccept = () => {
    // In a real app, you would save this to the database
    router.push("/dashboard");
  };

  if (status === "loading") {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Terms and Conditions</h2>
        </div>
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ut molestie tempus fermentum sed. Ut mauris sagittis laoreet ut. Pretium in id volutpat eget sed. Laoreet proin ornare ridiculus convallis maecenas convallis neque sapien sed. Id velit nullam a adipiscing nulla eu. Nisi habitasse risus dapibus fusce non.
          </p>
          <p>
            Ornare quam tristique semper eget et blandit morbi a nulla. Cursus odio sit et viverra augue morbi. Quisque donec nullam morbi varius neque aliquam eget. Sit donec sit quisque amet nam nibh nam ultricies. Aliquam etiam ut etiam lorem risus.
          </p>
          <p>
            Amet in faucibus consectetur mauris rhoncus sagittis volutpat pellentesque. Nullam et ullamcorper in amet amet scelerisque. Sed porttitor integer porttitor ullamcorper ultrices.
          </p>
          <p>
            Ornare habitant at augue elit mauris amet morbi. Elit tempus sed vel bibendum quisque sed. Euismod tempus blandit tempor interdum blandit morbi vitae. Magna dui mattis dignissim id felis id bibendum aliquam magna. Ornare dui amet consectetur in vitae elementum felis consequat vel.
          </p>
          <p>
            Scelerisque cursus nullam vitae sit ultrices penatibus. Amet scelerisque aliquet interdum nunc enim ante ut. Mollis adipiscing nullam potenti leo est tincidunt. Amet sit sit a amet ut porta tincidunt fames.
          </p>
          <p>
            Nunc orci consectetur tristique nullam orci tristique. Tellus venenatis leo enim tempus. Facilisis aenean at est volutpat facilisi mauris quis. Fringilla a venenatis sagittis viverra ultrices. Nisi sed sociis tellus viverra orci adipiscing.
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            onClick={handleAccept}
          >
            Accept and Continue
          </button>
        </div>
        <div className={styles.homeIndicator}></div>
      </div>
    </div>
  );
}