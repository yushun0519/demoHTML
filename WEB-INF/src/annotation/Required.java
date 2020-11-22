package annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Target;

import lombok.NonNull;

@Target( ElementType.FIELD )
@NonNull
public @interface Required {

}
