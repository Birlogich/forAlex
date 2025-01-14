"use client";

import "@/app/globals.css";
import styles from "@/styles/developerspage/developerspage.module.scss";
import { RedocStandalone } from "redoc";

const DevelopersPage = () => {
  return (
    <section className={`${styles.developerspage} px-6`}>
      <RedocStandalone
        specUrl="https://strukd.com/openapi/swagger.yaml"
        options={{
          hideFab: false,
          disableSearch: true,
          hideLoading: true,
          theme: {
            codeBlock: {
              backgroundColor: "#060415",
            },
            spacing: {
              unit: 3,
            },
            breakpoints: {
              large: "90rem",
              medium: "75rem",
              small: "50rem",
            },
            sidebar: {
              backgroundColor: "#120C3F",
              width: "284px",
              textColor: "#bcb6e9",
              groupItems: {
                activeBackgroundColor: "#2B1C93",
              },
              level1Items: {
                activeBackgroundColor: "#2B1C93",
              },
            },
            colors: {
              border: {
                dark: "transparent",
                light: "transparent",
              },
              primary: {
                main: "#bcb6e9",
              },
              text: {
                primary: "#bcb6e9",
              },
              http: {
                get: "#2DB296",
                post: "#6188FF",
                put: "#554D84",
                options: "#947014",
                patch: "#FBB343",
                delete: "#FE696B",
              },
              responses: {
                success: {
                  backgroundColor: "#196253",
                  color: "#E7F6F3",
                  tabTextColor: "#196253",
                },
                error: {
                  backgroundColor: "#8D3A3B",
                  color: "#FEEEEE",
                  tabTextColor: "#8D3A3B",
                },
              },
            },
            typography: {
              fontSize: "16px",
              lineHeight: "1.5em",
              optimizeSpeed: true,
              smoothing: "antialiased",
              code: {
                color: "#D2CEF0",
                backgroundColor: "rgba(210, 206, 240, 0.20)",
                wrap: false,
              },
              headings: {
                fontWeight: "bold",
                lineHeight: "2em",
                fontFamily: "nunito",
              },
            },
            rightPanel: {
              textColor: "#E7F6F3",
              backgroundColor: "#120C3F",
              servers: {
                overlay: {
                  backgroundColor: "#060415",
                },
              },
            },
          },
        }}
      />
    </section>
  );
};

export default DevelopersPage;
