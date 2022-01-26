import React from "react";
import classes from "./Routes.module.css";
import { useRouter } from "next/router";
import { Tween } from "react-gsap";

const Routes = ({ curr, routes, title }) => {
  const router = useRouter();

  return (
    <Tween
      from={{ opacity: 0, y: "-100%" }}
      to={{ opacity: 1, y: curr ? "0" : "-100%" }}
      duration={0.5}
    >
      <div className={classes.container}>
        {routes.map((data) => {
          const pathname = `/${title}/${data.pathname}`;
          return (
            <div
              className={classes.box}
              key={data.id}
              style={
                router.pathname === pathname ? { background: "#e0e0e0" } : {}
              }
              onClick={() => {
                router.replace(pathname);
              }}
            >
              <span>{data.name}</span>
            </div>
          );
        })}
      </div>
    </Tween>
  );
};

export default Routes;
