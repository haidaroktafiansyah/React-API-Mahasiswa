import React, { Component } from "react";
import Post from "../Post/Post";
import './BlogPost.css';

class BlogPost extends Component {

    state = {
        data: [],
        insertMahasiswa: {
            NIM: 0,
            nama: "",
            alamat: "",
            hp: "",
            angkatan: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3000/mahasiswa')
            .then(response => response.json())
            .then(jsonHasilAmbilDariApi => {
                this.setState({
                    data: jsonHasilAmbilDariApi
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleHapusArtikel = (dataparam) => {
        fetch(`http://localhost:3000/mahasiswa/${dataparam}`, { method: 'DELETE' })
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = { ...this.state.insertArtikel };
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3000/mahasiswa', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })

            .then((Response) => {
                this.ambilDataDariServerAPI();
            })
    }

    render() {
        return (
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input className="form-control" id="NIM" name="NIM" rows="1" onChange={this.handleTambahArtikel}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <input className="form-control" id="nama" name="nama" rows="2" onChange={this.handleTambahArtikel}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="alamat" name="alamat" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">No Hp</label>
                        <div className="col-sm-10">
                            <input className="form-control" id="hp" name="hp" rows="4" onChange={this.handleTambahArtikel}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                            <input className="form-control" id="angkatan" name="angkatan" rows="5" onChange={this.handleTambahArtikel}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <input className="form-control" id="status" name="status" rows="6" onChange={this.handleTambahArtikel}></input>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.data.map(mahasiswa => {
                        return <Post key={mahasiswa.id} nim={mahasiswa.id} nama={mahasiswa.nama} alamat={mahasiswa.alamat} hp={mahasiswa.hp} angkatan={mahasiswa.angkatan} status={mahasiswa.status} hapusArtikel={this.handleHapusArtikel} />
                    })
                }
            </div>
        )
    }
}

export default BlogPost;