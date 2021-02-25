import React from "react";
import ReactDOM from "react-dom";
import { App, AppProps } from "src/components/App.tsx";

//@ts-ignore
const { body } = document;
const props = JSON.parse(body.dataset.props) as AppProps;

ReactDOM.hydrate(<App {...props} />, body);
