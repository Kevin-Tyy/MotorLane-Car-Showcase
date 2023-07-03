"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { CustomButton } from "./";
interface Props {
	car: CarProps;
}

const CarCard = ({ car }: Props) => {
	const { city_mpg, year, make, model, transmission, drive } = car;
	return (
		<div className="card-car group">
			<div className="car-card__content">
				<h2 className="car-car__content-title">
					{make} {model}
				</h2>
			</div>
      <p>
        <span></span>
      </p>
		</div>
	);
};

export default CarCard;
