import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Servicios } from 'src/app/services/servicios.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-comentario',
  templateUrl: './crear-comentario.component.html',
  styleUrls: ['./crear-comentario.component.css']
})
export class CrearComentarioComponent implements OnInit {

  constructor(private servicios: Servicios, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  formulario = new FormGroup({
    carrera: new FormControl('', Validators.required),
    comentarios: new FormControl('', [Validators.required, Validators.minLength(10)]),
  })

  enviarFormulario() {
    // console.log(this.formulario.value);
    const { carrera, comentarios } = this.formulario.value
    this.servicios.obtenerSentimiento(comentarios!).subscribe((sentimentResponse: any) => {
      this.servicios.guardarComentariosFirebase(comentarios!, carrera!, sentimentResponse.score_tag).subscribe(firebaseResponse => {
        console.log(firebaseResponse);
        this.toastr.success('Se han enviado tus comentarios', 'Gracias por tu retroalimentación');
        this.formulario.reset()
      })
    })
  }

}
