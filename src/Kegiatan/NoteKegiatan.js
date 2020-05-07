import React from 'react';
import Flag from './FlagKegiatan';

const NoteKegiatan = () => {
    return (
        <div >
            <article>
                <header className="tc b--black-70 pv4">
                    <h3 className="f2 fw7 ttu tracked lh-title mt0 mb2 avenir">Kegiatan diSekolah</h3>
                    {/* <h4 class="f3 fw4 i lh-title mt0">Siem Reap, Cambodia</h4> */}
                </header>
                <Flag/>
                <Flag/>
                <Flag/>
                
            </article>
        </div>
    );
}

export default NoteKegiatan;