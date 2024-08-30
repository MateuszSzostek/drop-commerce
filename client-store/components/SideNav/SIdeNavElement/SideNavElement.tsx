import React from "react";
import ISideNavElement from "./SideNavElements.types";
import useSideNavElement from "./useSideNavElement";
import Link from "next/link";
import "./SideNavElement.styles.css";
import translations from "@/translations/translations.pl";

export default function SideNavElement({ name, links }: ISideNavElement) {
  console.warn(links);

  const { fragmentedLinks, navElementsTable } = useSideNavElement(links);

  console.warn(fragmentedLinks);

  return (
    <li className="nav-element">
      <a href="#" className="side-nav-element__category-link">
        <div className="side-nav-element__category-icon-wrapper">
          {navElementsTable[name]}
        </div>
        {translations.categories[name]}
      </a>
      <ul
        className="nav-element_mega-menu dropdown-menu mega-menu"
        style={{ minWidth: "440%" }}
      >
        <li className="yamm-content">
          <div className="row">
            <div className="col-sm-12 col-md-8">
              {fragmentedLinks &&
                fragmentedLinks.map(
                  (segment: { name: string; slug: string }[]) => {
                    return (
                      <ul className="links list-unstyled">
                        {segment?.map((segment) => (
                          <div
                            className="col-sm-12 col-md-3"
                            style={{ margin: "12px 0" }}
                          >
                            <li>
                              <h2> {translations.categories[segment.name]}</h2>
                              <ul>
                                {segment.nodes?.map((node) => (
                                  <li>
                                    <Link href={`category/${node.name}`}>
                                      {translations.categories[node.name]}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          </div>
                        ))}
                      </ul>
                    );
                  }
                )}
            </div>
            <div className="col-sm-12 col-md-4">
              <a href="#">
                <img alt="" src="assets/images/banners/banner-side.png" />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
}
