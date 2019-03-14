import React from "react";
import { Link } from "gatsby";
import Title from "../Globals/Title";

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 mx-auto text-center">
            <Title>Our store </Title>
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              beatae reprehenderit quo nesciunt nam quia corrupti tempora
              quibusdam asperiores at exercitationem ut sapiente ea consectetur
              odit distinctio possimus cum sequi aut, ipsum itaque accusamus!
              Sapiente aperiam voluptatum mollitia nemo similique corrupti totam
              dignissimos, eius excepturi eveniet cumque soluta nisi eaque.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                About page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
