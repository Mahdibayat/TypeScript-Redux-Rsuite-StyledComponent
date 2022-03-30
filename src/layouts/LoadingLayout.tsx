import React from "react";
import { useAppSelector } from "../redux/hooks";
import { Loader } from "rsuite";

const LoadingLayout = () => {
  const loading = useAppSelector((state) => state.tokens.loading);
  return (
    <>
      {loading && (
        <Loader
          style={{ zIndex: "1200" }}
          backdrop
          content="Load Tokens"
          vertical
        />
      )}
    </>
  );
};

export default LoadingLayout;
