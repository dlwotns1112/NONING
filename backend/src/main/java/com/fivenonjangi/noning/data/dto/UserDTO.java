package com.fivenonjangi.noning.data.dto;

import com.fivenonjangi.noning.data.entity.User;
import lombok.*;

import java.sql.Timestamp;

@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class UserDTO {
    private long id;
    private String genderCode;
    private String mbti1Code;
    private String mbti2Code;
    private String mbti3Code;
    private String mbti4Code;
    private byte age;
    private String ageRangeCode;
    private Timestamp reg;
    private Timestamp lastLogin;
    private Timestamp deleteDate;
    private boolean isDeleted;

    public User toEntity(){
        return User.builder()
                .id(id)
                .genderCode(genderCode)
                .mbti1Code(mbti1Code)
                .mbti2Code(mbti2Code)
                .mbti3Code(mbti3Code)
                .mbti4Code(mbti4Code)
                .age(age)
                .ageRangeCode(ageRangeCode)
                .reg(reg)
                .lastLogin(lastLogin)
                .deleteDate(deleteDate)
                .isDeleted(isDeleted)
                .build();
    }
}

// UserDTO userDTO = new UserDTO(, , , ,);
// UserDTO userDTO = new UserDTO.builder().id(1).age(26).build();
