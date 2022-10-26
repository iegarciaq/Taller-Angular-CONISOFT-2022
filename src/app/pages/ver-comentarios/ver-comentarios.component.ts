import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Servicios } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-ver-comentarios',
  templateUrl: './ver-comentarios.component.html',
  styleUrls: ['./ver-comentarios.component.css']
})
export class VerComentariosComponent implements OnInit {

  constructor(private servicio: Servicios) { }

  ngOnInit(): void {
  }

  arregloComentarios: any[] = [];


  formulario = new FormGroup({
    carrera: new FormControl('', Validators.required),
    // comentarios: new FormControl('', [Validators.required, Validators.minLength(10)]),
  })

  onChange() {
    const { carrera } = this.formulario.value
    this.arregloComentarios = [];
    this.servicio.obtenerComentariosPorCarrera(carrera!).subscribe((comentarios: any) => {

      if (comentarios !== null) {
        Object.keys(comentarios).map(carrera => {
          if (!this.arregloComentarios.find((elemento: any) => elemento.id == carrera)) {
            this.arregloComentarios.push({
              id: carrera,
              comentarios: Object.values(comentarios[carrera]),
              collapse: false,
            })
          }
        })
      }
      console.log(this.arregloComentarios); 
    })
  }

}
