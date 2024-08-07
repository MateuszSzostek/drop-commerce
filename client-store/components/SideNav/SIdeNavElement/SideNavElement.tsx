import React from "react";
import ISideNavElement from "./SideNavElements.types";
import useSideNavElement from "./useSideNavElement";
import Link from "next/link";

export default function SideNavElement({ name, links }: ISideNavElement) {
  const { fragmentedLinks } = useSideNavElement(links);

  console.warn("FRAGMENTEDL :", fragmentedLinks);

  return (
    <li className="dropdown menu-item">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
        <i className="icon fa fa-shopping-bag" aria-hidden="true"></i>
        {name}
      </a>
      <ul className="dropdown-menu mega-menu">
        <li className="yamm-content">
          <div className="row">
            <div className="col-sm-12 col-md-3">
              {fragmentedLinks &&
                fragmentedLinks.map(
                  (segment: { name: string; slug: string }[]) => {
                    return (
                      <ul className="links list-unstyled">
                        {segment?.map((link) => (
                          <li>
                            <Link href={`category/${link.slug}`}>
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                )}
            </div>
            <div className="dropdown-banner-holder">
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
