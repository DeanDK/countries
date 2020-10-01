import React from "react";
import Router from "next/router";
import firebase from "firebase";
import { NextPage } from "next";

const login = "/login?redirected=true";

const checkUserAuthentication = async () => {
  return firebase.auth().onAuthStateChanged;
};

export const withAuth = (WrappedComponent: NextPage) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async ({ res }) => {
    return checkUserAuthentication().then(async (user) => {
        
      if (!user) {
        if (res) {
          res?.writeHead(302, {
            Location: login,
          });
          res?.end();
        } else {
          return Router.replace(login);
        }
      }
      return user;
    });
  };
  return hocComponent;
};
