import React from 'react';
import Flag from './FlagKegiatan';
import Kegiatan1 from '../image/belajar1.jpeg';
import Bareng from '../image/bareng.jpeg';
import Diskusi1 from '../image/diskusi1.jpeg';

const NoteKegiatan = () => {
    return (
        <div >
            <article>
                <header className="tc b--black-70 pv4">
                    <h3 className="f2 fw7 ttu tracked lh-title mt0 mb2 avenir">Kegiatan diSekolah</h3>
                    {/* <h4 class="f3 fw4 i lh-title mt0">Siem Reap, Cambodia</h4> */}
                </header>
                <Flag kegiatan1 = {Kegiatan1}/>
                <Flag kegiatan1 = {Bareng}/>
                <Flag kegiatan1 = {Diskusi1}/>
                
            </article>
        </div>
    );
}

export default NoteKegiatan;