package com.memeapp.xmeme;

import com.memeapp.xmeme.models.Meme;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MemeRepository extends JpaRepository<Meme, Integer> {


    @Query(value = "select * from meme order by posted_at desc,id desc", nativeQuery = true)
    List<Meme> getLatestMemes();
}
