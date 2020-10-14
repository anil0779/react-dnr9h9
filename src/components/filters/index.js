import React, { useEffect, useState } from 'react';

function Filter(props) {

    const { categories = [], applyFilters } = props;

    const [catFilter, setCatFilter] = useState([]);

    useEffect(function () {
        const initCat = categories.map(cat => ({ name: cat, isChecked: false }));
        setCatFilter(initCat);
    }, []);

    const handleFilters = (e) => {
        const { name, checked } = e && e.target;
        catFilter.forEach(function (cat) {
            if (cat.name === name) cat.isChecked = checked;
        })
        const appliedCat = catFilter.filter(cat => cat.isChecked).map(cat => cat.name);
        applyFilters && applyFilters(appliedCat);
        setCatFilter(catFilter)
    }

    return (
        <div id="report-filters" style={{ textAlign: "left" }}>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "2rem" }}>
                <div style={{ fontWeight: "bold" }}>Filters</div>
                <div><a href="">Clear All</a></div>
            </div>
            <div style={{ margin: "2rem" }}>
                <label>Categories</label>
                <div style={{ marginTop: "1rem" }}>
                    {catFilter.map((cat, idx) => {
                        return (
                            <div key={idx}>
                                <input id={cat.name} type="checkbox" name={cat.name} onChange={handleFilters} />
                                <span>{cat.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Filter;