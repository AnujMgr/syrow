import React from "react";
import { StyleSideNav, StyleSideNavHeader,StyleTitle,StyleSideNavBody } from "./style";

import { ColorOption } from "../../Components";
import { StylePrimaryButton } from "../../Style";

const SideNav = (props) => {
	 
	return (
		<StyleSideNav width = {props.width}>
			<StyleSideNavHeader>
				<StyleTitle> Theme Modify </StyleTitle>

				<StylePrimaryButton onClick = {() => props.hideSideNav()} >
					<i className="ti-close right-side-toggle"></i>
				</StylePrimaryButton>
			</StyleSideNavHeader>

			<StyleSideNavBody>
				<ul>
	                <li>
	                	<b>Layout Options</b>
	                </li>
	            </ul>

	            <ul id="mainthemecolors" className="m-t-20">
	                <li><b>Theme (Light/Dark)</b></li>
	                <li>
	                	<ColorOption />
	                </li>
	            </ul>
			</StyleSideNavBody>
		</StyleSideNav>
	);
};

export default SideNav;
