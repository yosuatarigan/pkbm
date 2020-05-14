import React from 'react';
import Flag from './FlagKegiatan';
import Kegiatan1 from '../image/belajar1.jpeg';
import Bareng from '../image/bareng.jpeg';
import Diskusi1 from '../image/diskusi1.jpeg';

const detail = ['Pelaksanaan UASBN  Paket  A tahun ajaran 2018/2019. Lokasi Ujian di PKBM Hanuba.',
'Kepala sekolah (Bapak Jontar Sinaga,SE) beserta para tutor - tutor dan para relawan PKBM Hanuba',
'Diskusi ringan antara kepala sekolah beserta warga belajar PKBM Hanuba. Kegiatan diskusi seperti ini bisa dilakukan saat kegiatan pembelajaran maupun selesai kegiatan pembelajaran. Tujuannyaa adalah untuk membangun kedekatan yang baik antara sesama warga belajar maupun sesama warga belajar dengan para tutor maupun kepala sekolah']

const NoteKegiatan = () => {
    return (
        <div >
            <article className='center'>
                <header className="tc b--black-70 pv4">
                    <h3 className="f2 fw7 ttu tracked lh-title mt0 mb2 avenir">Kegiatan di Sekolah</h3>
                    {/* <h4 class="f3 fw4 i lh-title mt0">Siem Reap, Cambodia</h4> */}
                </header>
                
                <Flag kegiatan1 = {Kegiatan1} detail = {detail[0]}/>
                <Flag kegiatan1 = {Bareng} detail = {detail[1]}/>
                <Flag kegiatan1 = {Diskusi1} detail = {detail[2]}/>
                
            </article>
        </div>
    );
}

export default NoteKegiatan;