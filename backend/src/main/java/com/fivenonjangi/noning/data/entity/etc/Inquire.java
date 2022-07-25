package com.fivenonjangi.noning.data.entity.etc;

import com.fivenonjangi.noning.data.dto.etc.InquireDTO;
import com.fivenonjangi.noning.data.entity.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "inquire")
public class Inquire {
    @Id
    @Column(name = "inquire_id")
    long id;
    String title;
    String content;
    @ManyToOne
    @JoinColumn(name = "writer_id")
    User writer;
    String file;
    @Column(name = "is_deleted")
    boolean isDeleted;

    LocalDateTime reg;


    public InquireDTO toDto(){
        return InquireDTO.builder()
                .id(id)
                .title(title)
                .content(content)
                .writer(writer.toDto())
                .file(file)
                .isDeleted(isDeleted)
                .reg(reg)
                .build();
    }

}
