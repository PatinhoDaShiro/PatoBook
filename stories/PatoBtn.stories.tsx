import React, { Component } from "react";

import { PatoBtn } from "../src"

import {Meta, StoryFn} from "@storybook/react"
export default {
    title: 'Component/PatoBtn',
    component: PatoBtn
 } as Meta<typeof PatoBtn>

 const Template: StoryFn<typeof PatoBtn> = () => <PatoBtn/>

 export const Primario = Template.bind({})