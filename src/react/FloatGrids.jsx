import React from "react";

export default function FloatGrids() {
  return (
    <section className="grid-test">
      <div className="row">
        <div className="col-1of2">1 of 2</div>
        <div className="col-1of2">1 of 2</div>
      </div>

      <div className="row">
        <div className="col-1of3">1 of 3</div>
        <div className="col-1of3">1 of 3</div>
        <div className="col-1of3">1 of 3</div>
      </div>
      <div className="row">
        <div className="col-1of3">1 of 3</div>
        <div className="col-2of3">2 of 3</div>
      </div>
      <div className="row">
        <div className="col-1of4">1 of 4</div>
        <div className="col-1of4">1 of 4</div>
        <div className="col-1of4">1 of 4</div>
        <div className="col-1of4">1 of 4</div>
      </div>
      <div className="row">
        <div className="col-1of4">1 of 4</div>
        <div className="col-1of4">1 of 4</div>
        <div className="col-2of4">2 of 4</div>
      </div>
      <div className="row">
        <div className="col-1of4">1 of 4</div>
        <div className="col-3of4">3 of 4</div>
      </div>
    </section>
  );
}
