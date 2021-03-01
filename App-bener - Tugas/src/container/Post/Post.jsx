import React from "react";

const Post = (props) => {
    return (
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Thumbnail Artikel" />
            </div>
            <div className="konten-artikel">

                <div className="row">
                    <div className="col-sm-2">NIM : </div>
                    <p className="Nama">{props.nim}</p>
                </div>
                <div className="row">
                    <div className="col-sm-2">Nama : </div>
                    <p className="Nama">{props.nama}</p>
                </div>
                <div className="row">
                    <div className="col-sm-2">Alamat : </div>
                    <p className="Nama">{props.alamat}</p>
                </div>
                <div className="row">
                    <div className="col-sm-2">NO Hp : </div>
                    <p className="Nama">{props.hp}</p>
                </div>
                <div className="row">
                    <div className="col-sm-2">Angkatan : </div>
                    <p className="Nama">{props.angkatan}</p>
                </div>
                <div className="row">
                    <div className="col-sm-2">Status : </div>
                    <p className="Nama">{props.status}</p>
                </div>
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusArtikel(props.nim)}>Hapus</button>
            </div>
        </div>
    )
}

export default Post;