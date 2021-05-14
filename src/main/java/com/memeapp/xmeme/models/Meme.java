package com.memeapp.xmeme.models;


import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Meme {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String caption;

    @Column(nullable = false)
    private String imgUrl;

    private String madeBy;

    @Column(nullable = false)
    private LocalDate postedAt;
}
