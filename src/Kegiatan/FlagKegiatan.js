import React from 'react';

const FlagKegiatan = ({kegiatan1,detail}) => {
    return (
        <div className=" dt mw6  center pt0  pv1-m pv2-ns">
            <div className="db dtc-ns v-mid-ns">
                <img src={kegiatan1} alt="A bright blue sky" className="w-100 mw7 w5-ns" />
            </div>
            <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
                <p className="lh-copy">
                    {detail}
    </p>
            </div>
        </div>

        

    );
}

export default FlagKegiatan;