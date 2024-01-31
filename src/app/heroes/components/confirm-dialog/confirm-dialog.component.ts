import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Hero } from '../../interfaces/hero.interface';
import { Router } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styles: [
  ]
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef:MatDialogRef<ConfirmDialogComponent>,
    private router: Router,
    private heroService: HeroService,
    private snackBar:MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Hero,
  ){}

  onNoClick(): void{
    this.dialogRef.close(false);
  }

  onConfirm():void{
    this.dialogRef.close(true)

    this.dialogRef.afterClosed().subscribe(result=>{
      if (!result) return;




    })
  }




}
